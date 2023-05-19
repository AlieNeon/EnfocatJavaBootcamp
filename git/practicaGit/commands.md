**Command**
```sh
$ git checkout 
```

**Result**
```txt
FETCH_HEAD 
HEAD 
main 
origin/HEAD 
origin/main 
origin/practica01 
origin/practica01_bernalgonzalez_david 
origin/practica02 
practica01 
practica01_bernalgonzalez_david 
practica02 
```

**Command**
```sh
$ git checkout practica01
```

**Result**
```txt
Branch 'practica01' set up to track remote branch 'practica01' from 'origin'.
Switched to a new branch 'practica01'
```

**Command**
```sh
$ cd practica01/
```

**Result**
```txt
```

**Command**
```sh
$ git status 
```

**Result**
```txt
On branch practica01
Your branch is up to date with 'origin/practica01'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   fichero01.txt
        modified:   fichero02.txt
        modified:   fichero03.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

**Command**
```sh
$ git commit -am "edicion de practica 1"
```

**Result**
```txt
[practica01 c564735] edicion de practica 1
 3 files changed, 3 insertions(+)
```

**Command**
```sh
$ git checkout -b practica01_cejudo_alie
```

**Result**
```txt
Switched to a new branch 'practica01_cejudo_alie'
```

**Command**
```sh
$ cd ..
```

**Result**
```txt
```

**Command**
```sh
$ touch practica01_cejudo_alie
```

**Result**
```txt
```

**Command**
```sh
$ git add .
```

**Result**
```txt
```

**Command**
```sh
$ git commit -m "practica uno perfe!"
```

**Result**
```txt
[practica01_cejudo_alie e032c67] practica uno perfe!
 1 file changed, 1 insertion(+)
 create mode 100644 practica01_cejudo_alie
```

**Command**
```sh
$ git commit -am "Arreglar practica 1, faltaba el nombre"
```

**Result**
```txt
```

**Command**
```sh
$ git remote s origin git@github.com:AlieNeon/practicaGit.git
```

**Result**
```txt
set-branches   set-head       set-url        show           
```

**Command**
```sh
$ git remote set-url origin git@github.com:AlieNeon/practicaGit.git
```

**Result**
```txt
```

**Command**
```sh
$ git push --set-upstream origin practica01_cejudo_alie
```

**Result**
```txt
Enumerating objects: 17, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (12/12), 1009 bytes | 1009.00 KiB/s, done.
Total 12 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'practica01_cejudo_alie' on GitHub by visiting:
remote:      https://github.com/AlieNeon/practicaGit/pull/new/practica01_cejudo_alie
remote: 
To github.com:AlieNeon/practicaGit.git
 * [new branch]      practica01_cejudo_alie -> practica01_cejudo_alie
Branch 'practica01_cejudo_alie' set up to track remote branch 'practica01_cejudo_alie' from 'origin'.
```

**Command**
```sh
$ git checkout practica01
```

**Result**
```txt
Switched to branch 'practica01'
Your branch is ahead of 'origin/practica01' by 1 commit.
  (use "git push" to publish your local commits)
```

**Command**
```sh
$ git merge practica01_cejudo_alie 
```

**Result**
```txt
Updating c564735..9bde6be
Fast-forward
 practica01_cejudo_alie | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 practica01_cejudo_alie
```

**Command**
```sh
$ git push
```

**Result**
```txt
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:AlieNeon/practicaGit.git
   74e075f..9bde6be  practica01 -> practica01
```