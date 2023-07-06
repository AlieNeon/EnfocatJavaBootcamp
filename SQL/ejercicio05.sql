select postalZip as CodigoPostal, region as Region, country as Pais from myTable;
select * from myTable where phone like "(811)%";
select * from myTable where country in ("spain", "italy");
select count(*) from myTable;
select postalZip as CodigoPostal, region as Region, country as Pais from myTable where id in (select id from myTable where country in ("germany", "turkey"));
select min(id), max(id) from myTable;
select country, count(*) from myTable group by country;
select * from myTable order by postalZip limit 10;
delete from myTable where id in (select id from myTable where country = "singapore");