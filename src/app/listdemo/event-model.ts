export class EventModel /*adatleiro modell osztaly*/ {
  id: number;
  name: string;
  pic?: string;

  constructor(name: string, id: number = 0, pic: string = '') {
    //Object.assign- parameterek helyett csak egy parametert varok, param; a masodik objektum elemeit atmasolja az elsore
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}
