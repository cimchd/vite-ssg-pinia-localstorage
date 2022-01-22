# Steps to reproduce issue 178

I used yarn, so all steps below are done with yarn.

## Working in v0.17.4

### 1. install and build

```sh
$ yarn install
$ yarn build
$ yarn serve
```

### 2. Open in 2 browser tabs / new browser windows

### 3. click on toggle button => Both tabs should be in sync

## Not Working in v0.17.4

### 1. change version of vite-ssg in package.json to v0.17.5

### 2. install and build

```sh
$ yarn install
$ yarn build
$ yarn serve
```

### 3. Open in 2 browser tabs / new browser windows

### 4. click on toggle button => Both tabs are not in sync anymore
