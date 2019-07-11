# Welcome to Angular todo app 👋

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)

> A simple Angular todo app to learning proposies

## Install

```sh
npm install
```

## Usage

```sh
ng serve
```

## Run tests

```sh
ng test
```

## Author

👤 **Lameck Silva**

- Github: [@lamecksilva](https://github.com/lamecksilva)

## Tips

**Components** - São componentes da tela (view) que o angular gerencia e modifica de acordo com a logica do programa

**Services** - Componentes usam services, que provém funcionalidades não relacionadas diretamente com as views. Service providers porem ser "injetados" em componentes como dependências.

**Decorators** - São funções que modificam as classes JavaScript. O Angular define decorators que "atrelam" tipos de dados para classes, para o sistema saber o que elas significam e como elas funcionam.

**Interpolation** - Usados para mostrar dados, e.g:  
```<li>{{ data.property }}</li>```

**Property binding** - Como as props no React, são usadas para passar novas props para o componente "filho", e.g:  
```<app-item-detail [dataItem]="data"></app-item-detail> ```

**Event binding** - Basicamente ativação/tratamento/etc com eventos, e.g:  
```<li (click)="changeData(itemData)"></li>```

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
