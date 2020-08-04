import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ITunesSearchResults } from 'src/app/interfaces/itunes-search-result.interface';
import { ITunesSearchEntry } from 'src/app/interfaces/itunes-search-entry.interface';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
    /**
     * Form group for search field
     */
    public searchControl: FormControl;
    public results: Array<ITunesSearchEntry> = [];
    public woeid: string;
    private unsubscribe: Subject<any> = new Subject<any>();

    constructor(
        private searchService: SearchService,
        private cdRef: ChangeDetectorRef
    ) { }

    public ngOnInit() {
        this.searchControl = new FormControl('', Validators.required);
    }

    public iTunesSearch(term: string) {
        this.searchService.getITunesResults(term).pipe(
            takeUntil(this.unsubscribe)
        ).subscribe(res => {
            this.results = res.results;
            this.cdRef.detectChanges();
        });
    }


    /**
     * Destroy component and subscriptions.
     */
    public ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
