import {Component, OnInit} from '@angular/core';
import {EventModel} from './event-model';


@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
  events: EventModel[];


  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB3gWNOEJv0-ApUKI8-2blHyL0NjHxQUVKOEK5WbZpSgpSivyO&usqp=CAUs'
      },
      {
        id: 2,
        name: 'fezen',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB3gWNOEJv0-ApUKI8-2blHyL0NjHxQUVKOEK5WbZpSgpSivyO&usqp=CAUs'
      },
      {
        id: 3,
        name: 'rockmaraton',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB3gWNOEJv0-ApUKI8-2blHyL0NjHxQUVKOEK5WbZpSgpSivyO&usqp=CAUs'
      }
    ];
    /*const puf = this.events.reduce((x: EventModel, y: EventModel) => {
      return x.id > y.id ? x : y;*/
      /*ternary operator-(logikai vizsgalat) ? ha igaz, : ha hamis*/

      /*if (x.id > y.id) {
       return x;
      }else{
        return y;
      }*/

    /*}).id ;
    console.log(puf)*/
  }

  add(newEventNameInput: HTMLInputElement) {
    //immutability
    const maxId = this.events.reduce((x: EventModel, y: EventModel) =>
       x.id > y.id ? x : y).id;
    this.events = [...this.events, new EventModel(maxId + 1, newEventNameInput.value)];

    console.log(newEventNameInput.value);
    newEventNameInput.value = '';
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
}
