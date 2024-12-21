import { Component, OnInit, ViewChild } from '@angular/core';
// Swiper Slider
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})

/**
 * ProductSlider Component
 */
export class ProductSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Swiper Coverflow setting
   */
   Coverflow: SwiperOptions = {
    pagination: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // grid:{ rows: 2 },
    breakpoints:{
      0:{
        slidesPerView: 2, 
      },
      768:{
        slidesPerView: 2, 
      },
      1200:{
        slidesPerView: 3, 
      }
    }
  };
  
  /**
   * Product Data
   */
   productData = [
    {
      image:'assets/img/dyna-store/mattress1.webp',
      category: 'Mattress',
      name:'Dyna Hybrid Mattress',
      price: '154.00',
      discount: '',
      rating: 4.5,
    },
    {
      image:'assets/img/dyna-store/matress3(3).webp',
      category: 'Mattress',
      name:'Dyna Original Mattress',
      price: '28.50',
      discount: '38.50',
      rating:3,
    },
    {
      image:'assets/img/dyna-store/matress3(1).webp',
      category: 'Mattress',
      name:'Dyna Latex ll Mattress',
      price: '28.50',
      discount: '39.50',
      rating:5,
    },
    // {
    //   image: 'assets/img/dyna-store/matress5(1).webp',
    //   category: 'Mattress',
    //   name:'Dyna Black Matress',
    //   price: '68.40',
    //   discount: '',
    //   rating:4,
    // },
    // {
    //   image: 'assets/img/dyna-store/pillow1(1).webp',
    //   category: 'Pillow',
    //   name:'Dyna Memory Form Pillow',
    //   price: '',
    //   discount: '',
    //   rating:4.5,
    // },
    // {
    //   image: 'assets/img/dyna-store/pillow2(1).webp',
    //   category: 'Pillow',
    //   name:'Dyna Hybrid Pillow',
    //   price: '79.50',
    //   discount: '',
    //   rating:3,
    // },
    // {
    //   image: 'assets/img/dyna-store/pillow1(2).webp',
    //   category: `Pillow`,
    //   name:'Dyna Original Pillow',
    //   price: '18.99',
    //   discount: '',
    //   rating:4,
    // },
    // {
    //   image:'assets/img/dyna-store/pillow1(3).webp',
    //   category: `Pillow`,
    //   name:'Dyna Wave ll Pillow',
    //   price: '14.99',
    //   discount: '',
    //   rating:5,
    // },
  ]

}
