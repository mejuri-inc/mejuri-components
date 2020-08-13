# mejuri-components

> Mejuri components library

[![NPM](https://img.shields.io/npm/v/mejuri-components-2.svg)](https://www.npmjs.com/package/mejuri-components-2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### Add dependency to your package
```js
"@mejuri-inc/mejuri-components": "git+ssh://git@github.com:mejuri-inc/mejuri-components.git#{branch-name}"
```

### Add private mejuri-inc github package registry
Create .yarnrc file in the root of your project with the content below:
```js
"@mejuri-inc:registry" "https://npm.pkg.github.com"
```

Login to registry using with your own github token. See https://help.github.com/es/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages# 

### Run 
```bash 
yarn install
```

## Develop
to link this library in local we found the best alternative is to use (yalc)[https://github.com/whitecolor/yalc]

```npm install -g yalc```

In this repository folder run: 
```yalc publish```

In the repository requiring this library as dependency run:
```yalc link @mejuri-inc/mejuri-components```


## Deploy
In case you are not logged:
```
$ npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
Update version number in package.json and then run:
```sh
npm publish
npm run deploy
```


## License

MIT © [](https://github.com/)
