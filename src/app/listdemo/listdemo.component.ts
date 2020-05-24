import {Component, OnInit} from '@angular/core';
import {EventModel} from './event-model';


@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
  events: EventModel[];
  modifyEvent: EventModel;

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
    this.modifyEvent = new EventModel('');
  }

  save(newEventNameInput: HTMLInputElement, newEventInputPic: HTMLInputElement) {
    if (this.modifyEvent.id === 0) {

      const maxId = this.events.reduce((x: EventModel, y: EventModel) =>
        x.id > y.id ? x : y).id;
      this.events = [...this.events, new EventModel(newEventNameInput.value, maxId + 1, newEventInputPic.value)];
    } else {
      this.events = this.events.map((ev) => {
          if (ev.id === this.modifyEvent.id) {
return {
  id: ev.id,
  name: newEventNameInput.value,
  pic: newEventInputPic.value
};
          }else{
            return ev;
          }
        }
      );
      this.modifyEvent = new EventModel('');
    }
    newEventNameInput.value = '';
    newEventInputPic.value = '';

  }

  edit(id: number) {
    this.modifyEvent = this.events.filter((ev) => ev.id === id)[0];
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
}
