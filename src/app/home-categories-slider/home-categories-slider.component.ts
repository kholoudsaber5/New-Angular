import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ICategory } from '../interfaces/icategory';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-categories-slider',
  templateUrl: './home-categories-slider.component.html',
  styleUrls: ['./home-categories-slider.component.css']
})
export class HomeCategoriesSliderComponent implements OnInit {

  allCategories : ICategory[]=[]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: false
  }

  constructor ( private _productService : ProductService){}


  ngOnInit(): void {
    this._productService.getAllCategories().subscribe({
      next:(Response)=>{this.allCategories =Response.data},
      error:(err)=>{console.log(err)},
      
    })
    
  }

}
