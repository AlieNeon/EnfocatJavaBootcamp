# Sql murder mistery [Game](https://mystery.knightlab.com)

## Prologe
 A crime has taken place and the detective needs your help. The detective gave you the crime scene report, but you somehow lost it. You vaguely remember that the crime was a ​murder​ that occurred sometime on ​Jan.15, 2018​ and that it took place in ​SQL City​. Start by retrieving the corresponding crime scene report from the police department’s database. 

## Retrieving the murder details
```sql
select * from crime_scene_report where city like "SQL city" and type like "murder" and date like 20180115;
```
- date: 20180115
- type: murder
- description: Security footage shows that there were 2 witnesses. The first witness lives at the last house on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave".
- city: SQL City

### Sumary of info:
Witness 1 lives on "Northwestern Dr" at max number
Witness 2 lives on "Franklin Ave" with first name "Annabel"

## Retrieving the witnesses
```sql
select * from person where id in ((select id from person where address_street_name like "Northwestern Dr" order by address_number desc limit 1), (select id from person where address_street_name like "Franklin Ave" and name like "Annabel%"))
```

- id: 14887
- name: Morty Schapiro
- license_id: 118009
- address_number: 4919
- address_street_name: Northwestern Dr
- ssn: 111564949

- id: 16371
- name: Annabel Miller
- license_id: 490173
- address_number: 103
- address_street_name: Franklin Ave
- ssn: 318771143

## Let's check their interviews!
```sql
select * from interview where person_id in (14887, 16371)
```
- person_id: 14887
- transcript: I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W".

- person_id: 16371
- transcript: I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.

### Sumary of info:
Memeber of "Get Fit Now Gym"
Member tag starts with "48Z", gold member
Car plate has "H42W"
At gym at date "20180109"

## Membership of gym
```sql
select * from get_fit_now_member where id like "48Z%" and membership_status like "gold" and id in (select membership_id from get_fit_now_check_in where check_in_date like 20180109)
```
- id: 48Z55
- person_id: 67318
- name: Jeremy Bowers
- membership_start_date: 20160101
- membership_status: gold

- id: 48Z7A
- person_id: 28819
- name: Joe Germuska
- membership_start_date: 20160305
- membership_status: gold

### Sumary of info:
Jeremy Bowers (id 67318) was on the gym the day the second witness alledges to have seen the murderer, has a gold membership and has a member id starting with "48Z"
Joe Germuska (id 28819) was on the gym the day the second witness alledges to have seen the murderer, has a gold membership and has a member id starting with "48Z"

## Check who that goes to the gym also has a drivers license
```sql
select person_id, p.name, address_number, address_street_name,
g.id as member_id, membership_status, plate_number
from get_fit_now_member g 
left join person p on g.person_id = p.id 
left join drivers_license d on p.license_id = d.id
where plate_number like "%H42W%"
```
- person_id: 67318
- name: Jeremy Bowers
- address_number: 530
- address_street_name: Washington Pl, Apt 3A
- member_id 48Z55
- membership_status: gold
- plate_number: 0H42W2

### Sumary of info:
Jeremy Bowers (id 67318) fits the gym description and has a registered car with the descrived plate

## Lets check his inteview just in case
```sql
select * from interview where person_id like 67318
```
- person_id: 67318
- transcript: I was hired by a woman with a lot of money. I don't know her name but I know she's around 5'5" (65") or 5'7" (67"). She has red hair and she drives a Tesla Model S. I know that she attended the SQL Symphony Concert 3 times in December 2017. 

### Sumary of info:
So our murderer is a hitman, we neet to dig deeper
His client is a *rich* *redhair* *woman* between *65 and 67* inches.
Drives a *Tesla Model S* and attended the "SQL Symphony Concert" **3** times in "December 2017". 

## Event check
```sql
select *, count(*) from facebook_event_checkin 
where event_name like "SQL Symphony Concert" 
and date between 20171201 and 20171231 
group by person_id
having count(*) like 3
```
person_id | event_id | event_name           | date     | count(*)
| -       | -        | -                    | -        | -
24556     | 1143     | SQL Symphony Concert | 20171224 | 3
99716     | 1143     | SQL Symphony Concert | 20171229 | 3
### Sumary of info:
2 people attended this event 3 times

## Lets see who fits the hitman desciption and attended the concert
```sql
select * from person p
left join drivers_license d
on p.license_id = d.id
left join facebook_event_checkin e
on p.id = e.person_id
where car_make like "Tesla"
and car_model like "Model S"
and gender like "female"
and hair_color like "red"
and height between 65 and 67
and event_name like "SQL Symphony Concert" 
and date between 20171201 and 20171231 
group by person_id
having count(*) like 3
```
- id: 99716
- name: Miranda Priestly
- address_number: 1883
- address_street_name: Golden Ave
- ssn: 987756388
- height: 66
- hair_color: red
- gender: female
- car_make: Tesla
- car_model: Model S
- event_name: SQL Symphony Concert
 
### Sumary of info:
The hitman description seems to fit Miranda Priestly (id 99716)

## Lets accuse her
```sql
INSERT INTO solution VALUES (1, "Miranda Priestly");
        
        SELECT value FROM solution;
```
Congrats, you found the brains behind the murder! Everyone in SQL City hails you as the greatest SQL detective of all time. Time to break out the champagne!