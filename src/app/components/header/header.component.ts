import { Component } from '@angular/core';
import { DayNightService } from '../../services/day-night.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(public dayNightService: DayNightService){

  }

  getSirvUrl(imageUrl: string) {
    return `https://diffiewe.sirv.com/grosvenor/assets/${imageUrl}?q=30&format=webp`;
  }

  day:boolean = true;

  toggleDayNight(){
    this.dayNightService.toggleDay()
  }

  toggleSideBar(){
    this.dayNightService.toggleShowSideBar()
  }


}
