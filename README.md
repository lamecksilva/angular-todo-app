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
`<li>{{ data.property }}</li>`

**Property binding** - Como as props no React, são usadas para passar novas props para o componente "filho", e.g:  
`<app-item-detail [dataItem]="data"></app-item-detail>`

**Event binding** - Basicamente ativação/tratamento/etc com eventos, e.g:  
`<li (click)="changeData(itemData)"></li>`

**Events 'workflow'** - Exemplo simples do fluxo de um evento (apagar um item do todo) passado de pai pra filho e etc:

// todo-item.component.html

```html
<button (click)="onDelete(data)">Delete TODO</button>
```

// todo-item.component.ts

```ts
// ... codigo acima
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

onDelete(todo: Todo){
  this.deleteTodo.emit(todo)
}
// ... codigo abaixo
```

// todos.component.html

```html
<app-todo-item
  *ngFor="let todo of todos"
  [todo]="todo"
  (deleteTodo)="deleteTodo($event)"
>
  <li>{{ todo.title }}</li>
</app-todo-item>
```

// todos.component.ts

```ts
// ... codigo acima

deleteTodo(todo: Todo) {
  this.todos = this.todos.filter(t => t.id !== todo.id);
}

// ... codigo abaixo
```

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
