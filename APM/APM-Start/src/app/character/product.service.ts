import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct } from './products';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
  
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) { }

      getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
        .pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<IProduct | undefined> {
      return this.getProducts()
        .pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
        );
    }


    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console

        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // client-side error or network error occured. FIX THAT STUFF
          errorMessage = `Error: ${err.error.message}`;
        } else {
          // server-side error.
          errorMessage = `Server Error Code: ${err.status}, error message: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);}
    }       