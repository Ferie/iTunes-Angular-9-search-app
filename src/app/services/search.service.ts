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
    }
}
