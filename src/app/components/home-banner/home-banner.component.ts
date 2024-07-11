import { Component } from '@angular/core';
import { DayNightService } from '../../services/day-night.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent {

  constructor(private dayNightService: DayNightService){

  }

}
