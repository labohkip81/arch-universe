import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {


  breakpoints:any =  {
    1920: {
        slidesPerView: 6,
        spaceBetween: 30
    },
    1028: {
        slidesPerView: 6,
        spaceBetween: 30
    },
    990: {
        slidesPerView: 4,
        spaceBetween: 20
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    640: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    320: {
        slidesPerView: 2,
        spaceBetween: 10
    }

  }

}
