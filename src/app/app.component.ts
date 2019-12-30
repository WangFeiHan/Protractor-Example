import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public view = ['accent', 'primary', 'primary'];

  public change(num: number) {
    this.view.forEach((element, index) => {
      if (num === index) { this.view[index] = 'accent'; } else { this.view[index] = 'primary'; }
    });
  }
}
