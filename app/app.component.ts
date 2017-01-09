import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
<ul>
<li *ngFor="let item of items">
<h1>{{item}}</h1>
</li>
</ul>`,
})
export class AppComponent  { name = 'Angular';
items = ['1', '2','3'];
}
