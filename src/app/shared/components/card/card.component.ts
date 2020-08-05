import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { ITunesSearchEntry } from 'src/app/interfaces/itunes-search-entry.interface';

@Component({
    selector: 'certua-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
    @Input() public result: ITunesSearchEntry;

    constructor(
        private searchService: SearchService,
        private router: Router
    ) { }

    public resizeImage(imageUrl: string): void {
        console.log(imageUrl);
        // imageUrl = imageUrl.substr()
        // https://is5-ssl.mzstatic.com/image/thumb/Music/v4/f7/05/84/f7058482-c27d-8725-490d-1442a9f1db91/source/100x100bb.jpg
    }

    public goToDetails(): void {
    // public goToDetails(url: string): void {
    //     this.router.navigate(['/details', url], { queryParams: { product: url }, queryParamsHandling: 'merge' });
    }
}
