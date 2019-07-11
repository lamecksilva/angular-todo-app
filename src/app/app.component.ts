import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Lameco Sanders';

  constructor() {
    console.log(name);

    console.log('Angular seems ok');

    this.changeName('Jean Jacques');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
