import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApplicationConfigService } from "app/core/config/application-config.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ClassificationService {
    protected resourceUrl = this.applicationConfigService.getEndpointFor('api/classification');

    constructor(
      protected http: HttpClient,
      protected applicationConfigService: ApplicationConfigService,
    ) {}

    classify(image: FormData): Observable<HttpResponse<any>> {
        return this.http.post<HttpResponse<any>>(this.resourceUrl, image ,{ observe: 'response' });
    }
}