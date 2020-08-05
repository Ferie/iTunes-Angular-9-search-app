import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITunesSearchResults } from '../interfaces/itunes-search-result.interface';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    public total = 0;
    private apiUrl: string = environment.apiUrl;
    // private _checkoutTotal$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor(private http: HttpClient) {}

    public getITunesResults(term: string) {
        // console.log('api url', this.apiUrl);
        return this.http.jsonp<ITunesSearchResults>('https://itunes.apple.com/search?term=' + term, 'callback');

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`
            );
        }

        // Return an observable with a user-facing error message.
        return throwError('Something went in sending the request. Please try again.');
    }
}
