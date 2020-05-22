import {Component, OnInit} from '@angular/core';

export class EventModel /*adatleiro modell osztaly*/ {
  id: number;
  name: string;
  pic?: string;

  constructor(id, name, pic = ''  ) {
    //Object.assign- parameterek helyett csak egy parametert varok, param; a masodik objektum elemeit atmasolja az elsore
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}

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
  }

  add(newEventNameInput: HTMLInputElement) {
    //immutability
    this.events = [...this.events, new EventModel(5, newEventNameInput.value)];

    console.log(newEventNameInput.value);
    newEventNameInput.value = '';
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
}
