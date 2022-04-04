import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import SwiperCore, {
  Pagination,
  EffectCube
} from 'swiper/core';

SwiperCore.use([Pagination, EffectCube]);
@Component({
  selector: 'app-slides-photos',
  templateUrl: './slides-photos.page.html',
  styleUrls: ['./slides-photos.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlidesPhotosPage implements AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    pagination: true,
    slidesPerView: 'auto',
    effect: 'cube',
  };

  images = [
    '../../../assets/images/byHubble.jpg',
    '../../../assets/images/espace.jpg',
    '../../../assets/images/galaxy.jpg',
    '../../../assets/images/nasaAstronomy.jpg',
    '../../../assets/images/nebulaHubble.jpg',
    '../../../assets/images/nebuleuse.jpg',
    '../../../assets/images/spaceGalaxy.jpg',
    '../../../assets/images/star.jpeg'
  ];


  touchAllowed = false;

  constructor() { }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  swiperSlideChanged(e) {
    console.log('changed: ', e);
  }



  next() {
    this.swiper.swiperRef.slideNext(500);
  }

  prev() {
    this.swiper.swiperRef.slidePrev(500);
  }

  toggleTouch() {
    this.touchAllowed = !this.touchAllowed;
    this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
  }

}
