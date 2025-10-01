---
title: Git
description: Aprendiendo GIT
---

[Curso Microsoft](https://learn.microsoft.com/en-us/training/modules/intro-to-git)

Objetivos:
- Conocer qué es un control de versiones
- Comprender los sistemas de control de versiones distribuidos
- Crear un proyecto en GIT y configúrarlo
- Realizar un seguimiento de los cambios en el código utilizando Git
- Utilizar Git para recuperarse de errores simples


## ¿Qué es un control de versiones?

Un sistema de control de versiones (VCS) es un programa o conunto de programas que rastrea los cambios en una colección de archivos. Uno de sus objetivos es recuperar fácilmente versiones anteriores de archivos individuales o de todo el proyecto. Otro de sus objetivos es permitir que varios miembros del equipo trabajen sin afectar el trabajo de los demás.

VCS tambien se lo conoce como SCM (Source Configuration Management) ambos terminos se suelen utilizar indistintamente. Un VCS se puede utilizar para proyectos fuera del software, como documentos, libros o tutoriales en línea.

Con un VCS puedes:
- Ver todos los cambios realizados en su proyecto, cuándo se realizaron los cambios y quién los realizó.
- Incluya un mensaje con cada cambio para explicar el razonamiento detrás de él.
- Recuperar versiones anteriores de todo el proyecto o de archivos individuales.
- Crear *banches* donde se puiedan realizar cambios experimentales.
- Adjuntar *tag* de versión para marcar versiones estables.

Git es un VCS rápido, versátil, altamente escalable, gratuito y de código abierto.

## Control de versiones distribuidas

Las instancias anteriores de VCS, incluidas CVS, Subversion (SVN) y Perforce, utilizaban un servidor centralizado para almacenar el historial de un proyecto. Esta centralización significó que un servidor también fuera potencialmente un único punto de falla.

Git lo es *distribuido*, lo que significa que el historial completo de un proyecto se almacena tanto en el cliente y en el servidor. Puede editar archivos sin una conexión de red, marcarlos localmente y sincronizarlos con el servidor cuando haya una conexión disponible. Los cambios pueden transmitirse por correo electrónico o compartirse mediante medios extraíbles.


## Terminología GIT

Para entender Git, hay que entender la terminología. 
- ***Working tree***: El conjunto de directorios y archivos anidados que contienen el proyecto en el que se está trabajando.

- ***Repository (Repo)***: El directorio, ubicado en el nivel superior de un *working tree*, donde Git mantiene todo el historial y los metadatos de un proyecto. Los *repositorios* casi siempre se nombran como *repo*. Un *bare repository* es aquel que no forma parte de un árbol de trabajo; se utiliza para compartir o realizar copias de seguridad.

- ***Hash***: Un número producido por una función hash que representa el contenido de un archivo u otro objeto como un número fijo de dígitos. Git utiliza hashes de 160 bits de longitud. Una ventaja de usar hashes es que Git puede saber si un archivo ha cambiado al hashar su contenido y comparar el resultado con el hash anterior. Si se cambia el sello de fecha y hora del archivo, pero no se cambia el hash del archivo, Git sabe que el contenido del archivo no ha cambiado.

- ***Object***: Un *repositorio* de Git contiene cuatro tipos de objetos, cada uno identificado de forma única mediante un hash SHA-1. Un *blob* es un objeto que contiene un archivo ordinario. Un *tree* es un objeto que representa un directorio; contiene nombres, hashes y permisos. Un *commit* es un objeto que representa una versión específica del árbol de trabajo. Un *tag* es un nombre adjunto a un *commit*.

- ***Commit***: Cuando se usa como verbo, *commitear* significa crear un objeto commit. Esta acción toma su nombre de los commits en una base de datos. Significa que estás *committing* los cambios que has realizado para que otros eventualmente también puedan verlos.

- ***Branch***: Un *branch* es una serie nombrada de *commits* vinculados. El *commit* más reciente en un *branch* se llama *head*. El *branch* por defecto, que se crea al inicializar un *repository*, se llama *main*, aunque en Git a menudo se le llama *master*. El *head* del *branch* actual se llama *HEAD*. Los *branches* son una característica increíblemente útil de Git porque permiten a los desarrolladores trabajar de manera independiente (o conjunta) en *branches* y luego mergear sus cambios al *branch* por defecto.

- ***Remote***: Un *remote* es una referencia nombrada a otro Git *repository*. Cuando creas un *repo*, Git crea un *remote* llamado *origin*, que es el *remote* por defecto para las operaciones de *push* y *pull*.

- ***Commands, subcommands, and options***: Las operaciones de Git se realizan usando commands como *git push* y *git pull*. *git* es el *command*, y *push* o *pull* es el *subcommand*. El *subcommand* especifica la operación que quieres que Git ejecute. Los *commands* frecuentemente van acompañados de *options*, que usan guiones (-) o dobles guiones (--). Por ejemplo: *git reset --hard*.

## La línea de comando de Git

Si bien el lugar habitual de GIT es tu terminal(shell o powershell), hay varias herramientas GUI(Interfaz Gráfica de Usuario), como Github Desktop o GitKraken, muchos editores ya integran una herramientas así en su interfaz. Todas estas herramientas funcionan de forma diferente y tienen diferentes limitaciones, ninguna de ellas implementa todo de la funcionalidad de GIT.

## Git, GitHub, Gitlab

Mientras trabaja con Git, se va a encontrar con plataformas como Github y Gitlab, es posible que se pregunte acerca de las diferentes entre ellas. 

Git es un sistema de control de versionado distribuido (DVCS), proporciona una forma de trabajar con una o más sucursales locales y luego enviarlas a un repositorio remoto. 

Github y Gitlab son plataformas en la nube que utiliza Git como tecnología central. Estas herramientas simplifican el proceso de colaboración en proyectos, proporcionan un sitio web, más herramientas de línea de comandos y un flujo general de los desarrolladores y usuarios puedan utilizar para trabajar juntos. Estas plataformas funcionan como repositorio remoto.

Algunas de sus funcionalidades son:
- Issues
- Discusiones
- Pull request
- Notificaciones
- Labels
- Actions
- Forks

## Configurando Git

Se asume que ya tienes git instalado en tu sistema.

[Descargar Git](https://git-scm.com/downloads)

Para configurar git, se debe ejecutar los siguientes comandos:

```bash
git config --global user.name "Tu nombre"
```

```bash
git config --global user.email "tu.email@gmail.com"
```

Con esto git sabrá quien está realizando los cambios en los archivos.

## Crear un repositorio

Creemos un folder vacío para inicializar GIT y tener nuestro primer repositorio

```bash
mkdir my-repository
```

```bash
cd my-repository
```

```bash
git init
```

El git init puede ejecutarlo en cualquier directorio que quiera convertir en un repositorio, puede utilizarlo tanto en un directorio ya existente o crear uno nuevo como ejemplificamos.

## Trabajando con GIT

<br />

### Crear un archivo

Creemos un archivo para tener cambios en el repo

```bash
touch README.md
```

### Verificar los cambios

Con esto podemos ejecutar el siguiente comando:

```bash
git status
```

Que nos muestra los archivos que han sido modificados/creados, en este caso el archivo README.md

Tambien notará que la terminal le dira: Untracked files. Esto significa que no se realizará un seguimiento independiente de si se realizan más cambios o no en él.

### Rastrear los cambios

Para empezar a rastrear los cambios en el archivo README.md, debemos ejecutar el siguiente comando:

```bash
git add README.md
```

En caso que quiera rastrear los cambios de todos los archivos listados puede ejecutar:

```bash
git add .
```

Si volvemos a ejecutar git status, veremos que ahora antes del README.MD dira *Changes to be committed:*. Esto significa que los archivos estan listos para ser *commiteados*.

### Commitear los cambios

Ahora que los archivos estan listos para ser commiteados, debemos ejecutar el siguiente comando:

```bash
git commit -m "Mi primer commit"
```

Ya con todo este seguimiento, git reconoce el directorio "my-repository" como un repositorio y además que tiene un commit "Mi primer commit" con su hash SHA-1.

### Ver las diferencias

Para visualizar los cambios que se han realizado en el archivo README.md, debemos ejecutar el siguiente comando:

```bash
git diff README.md
```

### Corrigiendo un commit

Es posible que haya situaciones que crees un commit y te des cuenta tarde que algo quedó mal en algún archivo, no desesperes, hay solución, realiza la corrección, guarda y ejecuta lo siguiente:

```bash
git commit --amend --no-edit
```

Esto editara el último commit ahorrandote el trabajo de crear uno nuevo o peor, teniendo que eliminar el anterior y creandolo nuevamente.

### Ver los hash y nombres de los commits

Si fuiste creando muchos commits y deseas ver cuantos hay en tu local actualmente, puedes ejecutar el siguiente comando:

```bash
git log --oneline
```

Esto nos muestra los hash y nombres de los commits en una sola linea, desde el más nuevo al más viejo.

### Eliminé un archivo ¿Qué hago?

Si estabas trabajando y eliminaste por error un archivo, puedes ejecutar el siguiente comando:

```bash
git checkout -- README.md
```

Esto restaurara el archivo README.md a su estado anterior.

### Volviendo a un commit anterior

Sin pensar en causas específicas, habrá momentos que quieras volver a un commit anterior, para ello puedes ejecutar el siguiente comando:

```bash
git reset --hard HEAD^
```

### Revierte un commit

Es posible que quieras sacar los cambios del último commit pero sin perder lo que se hizo, esto puede pasar porque momentaneamente no quieres tenerlo, pero en un futuro puedes volver a usarlo, para ello puedes ejecutar el siguiente comando:

```bash   
git revert --hard HEAD
```

Para ser precisos esto lo que hará es crear un nuevo commit pero eliminando los cambios del último commit.

### Navegando entre commits

Una carácteristica muy potente de git es la capacidad de volver a cambios anteriores y trabajar desde ahí, para ello puedes ejecutar el siguiente comando:

```bash
git checkout <hash-commit>
```

### Archivo .gitignore

Un archivo .gitignore es un archivo que contiene una lista de archivos y directorios que Git debe ignorar. Por ejemplo, si tienes un archivo .env que contiene información sensible, puedes agregarlo al archivo .gitignore para que Git no lo incluya en el repositorio.


### Archivo .gitkeep

Git no rastrea archivos vacios, generamente esto es conveniente, pero si deseamos mantener ciertas carpetas para determinar estructuras, podemos crear un archivo .gitkeep dentro de los directorios para que git los rastree.

## Cheat Sheet

<embed src="/git-cheat-sheet-education.pdf" type="application/pdf" width="100%" height="600px" />