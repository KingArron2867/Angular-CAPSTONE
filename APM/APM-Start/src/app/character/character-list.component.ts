import { Component, OnInit } from '@angular/core' ;

import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {

    title = 'Character List';
    imageWidth = 50;
    imageMargin = 2;
    showImage  = false;
    errorMessage: '';

    _listFilter: ''; 
    get listFilter(): string{
        return this._listFilter;
    } 
    set listFilter(value: string) {
        this._listFilter = value;
        this.filterdProducts=this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filterdProducts: IProduct[]
    products: IProduct[]= [];
    

    constructor(private productService: ProductService)  { }
    
    onRatingClicked(message: string): void {
        this.title = 'Character List: ' + message;
    }
    


    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productCharacter.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filterdProducts = this.products;
            },
            error: err => this.errorMessage = err 
        });
        
    }
}
