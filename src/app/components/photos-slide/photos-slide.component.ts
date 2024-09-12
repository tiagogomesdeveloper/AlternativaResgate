import { Component } from '@angular/core';

@Component({
  selector: 'app-photos-slide',
  templateUrl: './photos-slide.component.html',
  styleUrls: ['./photos-slide.component.scss'],
})
export class PhotosSlideComponent {
  photosSlide = [
    {
      src: '../../../assets/images/photos-slide/photo-slide1.jpg',
    },
    {
      src: '../../../assets/images/photos-slide/photo-slide2.jpg',
    },
    {
      src: '../../../assets/images/photos-slide/photo-slide3.jpg',
    },
    {
      src: '../../../assets/images/photos-slide/photo-slide4.jpg',
    },
    {
      src: '../../../assets/images/photos-slide/photo-slide5.png',
    },
    {
      src: '../../../assets/images/photos-slide/photo-slide6.jpg',
    },
    {
      src: '../../../assets/images/photos-slide/photo-slide7.png',
    },
    {
      src: '../../../assets/images/photos-slide/photo-slide8.jpg',
    },
    {
      src: '../../../assets/images/photos-slide/photo-slide9.jpg',
    },
  ];
}
