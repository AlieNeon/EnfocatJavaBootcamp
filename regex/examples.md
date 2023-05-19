# Regex

## First Example "234"
123
234
123456
1234567

## Second Example "123"
123
234
123456123456
1234567

## NL Example "\n"
ojo loro rioja hoja
  
 

## Space Example "\s"
ojo loro rioja hoja
  
 

## Glob / Kleene "*" = Selects all chars
## Dot "." = Selects 1 char that is not a new line

## At start "^"
## At end "$"

## Groups "[]"
### [ro] = r | o
### [^ro] = /W - r | o
### Range [a-z] = All the lower aphabet
### Range [a-zA-Z] = All the aphabet
### Range [0-9] = All numbers

## References "(exp)" 
Returns the expresion inside in their respective $1, $2, $3...

## Quantifiers
### * 0 or more
### + 1 or more
### ? 0 or 1
### {n} exactly n
### {n,} n or more
### {n,m} n to m 

## Exercices

### Exercice 1
David Bernal

Bernal David
Answer: (\w+)\s(\w+) r: $2 $1

### Exercice 2
David Bernal gonzalez

Bernal David
Answer: (\w+)\s(\w+)\s(\w+) r: $3 $2 $1

## Conditionals
### (?:(exp) true|false)

## Last exercice (CSV)
### (\d+)\s+([\w\s\.ÁÉÍÓÚÑ]+)\t([\w\.-]+@[\w\.-]+)\s+(\w+)?\s*([\wñí]+)?
### $1;$2;$3;$4;$5