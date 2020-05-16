import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Componentbasic';
  events = ['egy', 'ketto', 'harom', 'negy', 'ot'];
   show = true;
  klikkeljunke = true;
  inputContent: string;

  toggle() {
    this.show = !this.show;
    this.inputContent = 'szena szalma';
  }

  demo(event: MouseEvent) {
    console.log(event.screenY);
  }
}
