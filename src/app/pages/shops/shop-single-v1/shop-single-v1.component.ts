import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { SwiperOptions } from 'swiper';

// Data Get
import { StyleData, PopulerData } from './data';

@Component({
  selector: 'app-shop-single-v1',
  templateUrl: './shop-single-v1.component.html',
  styleUrls: ['./shop-single-v1.component.scss']
})

/**
 * ShopSingle V1 Component
 */
export class ShopSingleV1Component implements OnInit {

  // Review Form
  reviewForm!: UntypedFormGroup;
  submitted = false;
  styleDatas:any;
  populerDatas:any;

  selectedCategory = 'Single';
  selectedHeight = 6;
  selectedDimensionUnit = 'inch';
  selectedDimension = '';
  dimensionOptions: string[] = [];

  dimensionData: { [key: string]: string[] } = {
    inch: ['72 x 30 x 6 inches', '72 x 36 x 6 inches', '75 x 36 x 6 inches', '78 x 36 x 6 inches'],
    cm: ['182.9 x 76.2 x 15.2 cm', '182.9 x 91.4 x 15.2 cm', '190.5 x 91.4 x 15.2 cm', '198.1 x 91.4 x 15.2 cm'],
    feet: ['6 x 2.5 x 0.5 feet', '6 x 3 x 0.5 feet', '6.25 x 3 x 0.5 feet', '6.5 x 3 x 0.5 feet']
  };

  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.styleDatas = StyleData;
    this.populerDatas = PopulerData;
    this.setDimensionUnit(this.selectedDimensionUnit);
    /**
     * Form Validatyion
     */
     this.reviewForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      review: ['', [Validators.required]],
    });
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }

  setHeight(height: number): void {
    this.selectedHeight = height;
  }

  setDimensionUnit(unit: string): void {
    this.selectedDimensionUnit = unit;
    this.dimensionOptions = this.dimensionData[unit];
    this.selectedDimension = '';
  }

  /**
   * Size Chart Modal
   * @param sizeChartModal scroll modal data
   */
   sizetModal(sizeChartModal: any) {
    this.modalService.open(sizeChartModal, { size: 'md', centered: true });
  }


  // convenience getter for easy access to form fields
  get form() { return this.reviewForm.controls; }

  /**
  * Form submit
  */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.reviewForm.invalid) {
      return;
    }
  }

  /**
  * Swiper Style setting
  */
  public Style: SwiperOptions = {
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    loop:true,
    breakpoints:{
      499:{
        slidesPerView: 1, 
      },
      500:{
        slidesPerView: 2, 
      },
      767:{
        slidesPerView: 3, 
      },
      1200:{
        slidesPerView: 4, 
      }
    }
  };

  /**
  * Swiper Popular setting
  */
   public Popular: SwiperOptions = {
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    loop:true,
    breakpoints:{
      499:{
        slidesPerView: 1, 
      },
      500:{
        slidesPerView: 2, 
      },
      767:{
        slidesPerView: 3, 
      },
      1200:{
        slidesPerView: 4, 
      }
    }
  }; 

  // Image Click Filtering
  filterImg(e:any,image:any){
    document.querySelectorAll('.product-gallery-thumblist a').forEach(element => {
      element.classList.remove('active')      
    });
    const img:any = (document.querySelector('#first img') as HTMLImageElement);
    img.src = image; 
    e.target.closest('a').classList.add('active');
  }

}
