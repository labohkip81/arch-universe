import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayNightService {

  day: boolean = false;
  showSideBar: boolean = false;

  constructor() { }

  toggleDay(){
    this.day = !this.day;
  }

  toggleShowSideBar(){
    this.showSideBar = !this.showSideBar;
  }
}
