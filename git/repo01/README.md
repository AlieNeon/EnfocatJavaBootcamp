# Ejercicio 1  

## 1.1 Crear Repo

Para crear el repositorio usamos el siguiente comando:

```sh  
git init repo01
```

## 1.2 Crear documento readme.md

Para crear el documento usamos el siguiente comando:

```sh  
touch readme.md
```

## 1.3 Stage and commit

Para hacer el commit usamos el siguiente comando:

```sh  
git add readme.md
git commit -m "Add readme"
```

## 1.4 Push

Para hacer push usamos el siguiente comando:

```sh  
git push
```

**Result:**  

```
fatal: No configured push destination.
```


## 1.5 Remote

Comprobamos cual es el remote origin con este comando para darnos cuenta dle problema:

```sh  
git remote -v
```

**Result:**  

```
```

Esta vacio devido a que no hay remote origin.

## 1.6 GITHUB

Creamos una nueva repo en github con el nombre repo01

Asociamos con los siguientes comandos

```sh  
git remote add origin git@github.com:AlieNeon/repo01.git
git branch -M main
```

## 1.7 Remote

Comprobamos cual es el remote origin con este comando:

```sh  
git remote -v
```

**Result:**  

```

origin  git@github.com:AlieNeon/repo01.git (fetch)
origin  git@github.com:AlieNeon/repo01.git (push)
```  

_**Perfecto!**_

## 1.8 Ahora si, Push

Usamos el siguiente comando para hacer push

```sh  
git push -u origin main
```

## 1.9 ¿Qué vemos en github?

Pues nada, pero ahora que he hecho rename a README en vez de readme si! :D