import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {Carddetails} from './carddetails';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get<Carddetails[]>('http://localhost:8080/carddetails')
      .pipe(
        tap(),
        catchError(this.handleError));
  }


  saveCard(card: Carddetails): Observable<Carddetails>{
    console.log(card);

    return this.http.post<Carddetails>('http://localhost:8080/creditcard', card, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
      .pipe(
        tap( _ => console.log(`saved card id=${card.cardNumber}`)),
        catchError(this.handleError));

  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
    }
    // return an observable with a user-facing error message

    if (error.status !== 200) {
      return throwError(  `${error.error.message}`);
    }
    return throwError(  ``);
  };

}
