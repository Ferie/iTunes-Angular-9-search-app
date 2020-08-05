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
}
