import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Item test']);
  goal = this.goals.asObservable();


  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }


}
