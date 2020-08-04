import { TestBed, inject } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { SearchService } from './search.service';
import { environment } from 'src/environments/environment';

describe('SearchService', () => {
    let httpTestingController: HttpTestingController;
    let service: SearchService;
    const apiUrl = environment.apiUrl;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SearchService],
            imports: [HttpClientTestingModule]
        });
        // Inject the service (which imports the HttpClient) and the Test Controller
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(SearchService);
    });

    // Verify that there are no pending HTTP requests after test
    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
