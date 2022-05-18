SIMPLE-BOOT-FRONT
===
## Examples 🚀 Quick start

--- 

### STEP 1
```shell
#cd root directory
git submodule init
git submodule update

cd libs/dom-render
git checkout master
npm run npm-build

cd libs/simple-boot-core
git checkout master
npm run npm-build
```

### STEP 2
```shell
#cd root directory
npm install
npm run npm-build
```


### STEP 3
```shell
cd examples/{examples-name}
npm install
npm start
```