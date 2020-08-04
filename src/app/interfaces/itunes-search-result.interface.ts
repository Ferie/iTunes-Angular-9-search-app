import { ITunesSearchEntry } from './itunes-search-entry.interface';

export interface ITunesSearchResults {
    resultCount: number;
    results: ITunesSearchEntry[];
}
