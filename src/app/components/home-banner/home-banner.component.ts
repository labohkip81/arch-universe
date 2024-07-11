import { Component } from '@angular/core';
import { DayNightService } from '../../services/day-night.service';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent {

  // Swiper
  swiperConfig: SwiperOptions = {
    // spaceBetween: 10,
    // navigation: true,
    // preventClicks: false,
    // slidesPerView: 'auto',
    // freeMode: true,
    // watchSlidesProgress: true,
    // noSwipingSelector: 'a',
    // focusableElements: 'input, select, option, textarea, video, label'
  }

  constructor(private dayNightService: DayNightService){

  }

}
