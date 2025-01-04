import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
  encapsulation: ViewEncapsulation.None
})

/**
 * Trending Component
 */
export class TrendingComponent implements OnInit {

 
  readonly = true;
  // rating = 4.5;
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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.setDimensionUnit(this.selectedDimensionUnit);
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
   * Product Data
   */
  productData = [
    {
      id:'1',
      image:['assets/img/dyna-store/mattress1.webp','assets/img/dyna-store/matress1(1).webp','assets/img/dyna-store/matress1(2).webp','assets/img/dyna-store/matress1(3).webp'],
      category: 'Mattress',
      name:'Dyna Hybrid Mattress',
      price: '154.00',
      discount: '',
      rating: 3.5,
      review:75,
      size:['7.5','8','8.5','9'],
      colors:[],
      type:'size',
      cat:'Mattress',
      brand:'adidas'
    },
    {
      id:'2',
      image:['assets/img/dyna-store/matress3(3).webp','assets/img/dyna-store/matress3(2).webp', 'assets/img/dyna-store/matress3(4).webp'],
      category: 'Mattress',
      name:'Dyna Original Mattress',
      price: '28.50',
      discount: '38.50',
      rating:3,
      review:50,
      size:[],
      colors:['#eaeaeb','#d1dceb','#f4e6a2','#f3dcff'],
      type:'color',
      cat:'Mattress',
      brand:'ataylor'
    },
    {
      id:'3',
      image:['assets/img/dyna-store/matress3(1).webp', 'assets/img/dyna-store/matress3(5).webp'],
      category: 'Mattress',
      name:'Dyna Latex ll Mattress',
      price: '28.50',
      discount: '39.50',
      rating:5,
      review:20,
      size:['XS','S','M','L'],
      colors:[],
      type:'size',
      cat:'Mattress',
      brand:'ataylor'
    },
    {
      id:'4',
      image:['assets/img/dyna-store/matress5(1).webp', 'assets/img/dyna-store/matress5(2).webp', 'assets/img/dyna-store/matress5(3).webp', 'assets/img/dyna-store/matress5(4).webp'],
      category: 'Mattress',
      name:'Dyna Black Matress',
      price: '68.40',
      discount: '',
      rating:4,
      review:70,
      size:['XS','S','M','L'],
      colors:[],
      type:'size',
      cat:'Mattress',
      brand:'ataylor'
    },
    {
      id:'5',
      image:['assets/img/dyna-store/pillow1(1).webp'],
      category: 'Pillow',
      name:'Dyna Memory Form Pillow',
      price: '',
      discount: '',
      rating:4.5,
      review:55,
      size:[],
      colors:[],
      type:'details',
      cat:'Pillow',
      brand:'armani'
    },
    {
      id:'6',
      image:['assets/img/dyna-store/pillow2(1).webp'],
      category: 'Pillow',
      name:'Dyna Hybrid Pillow',
      price: '79.50',
      discount: '',
      rating:3,
      review:10,
      size:[],
      colors:['#97947c','#99a8be','#eaeaeb'],
      type:'color',
      cat:'Pillow'
    },
    {
      id:'7',
      image:['assets/img/dyna-store/pillow1(2).webp'],
      category: `Pillow`,
      name:'Dyna Original Pillow',
      price: '18.99',
      discount: '',
      rating:4,
      review:25,
      size:['XS','S','M'],
      colors:[],
      type:'size',
      cat:'Pillow'
    },
    {
      id:'8',
      image:['assets/img/dyna-store/pillow1(3).webp'],
      category: `Pillow`,
      name:'Dyna Wave ll Pillow',
      price: '14.99',
      discount: '',
      rating:5,
      review:30,
      size:[],
      colors:[],
      type:'size',
      cat: 'Pillow'
    },
  ]

  /**
   * Open center modal and product data get
   * @param centerDataModal center modal data
   */
   product_img:any;
   singleData:any;
   centerModal(centerDataModal: any,id:any) {
    this.singleData = this.productData[id];
    this.product_img = this.singleData.image[0];     
    this.modalService.open(centerDataModal, { size: 'xl', centered: true });
  }

  // Image Click Filtering
  filterImg(id:any){
    this.product_img = this.singleData.image[id]
  }

}
