import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AppService } from "./app.service";
import { CrmResponse } from "src/app/model/crm.response.interface";

@Injectable()
export class DataService {    
    constructor (
        private appService: AppService,
        private http: HttpClient,        
        private router: Router,
    ) {} 

    get cfg(): any {return this.appService.cfg;}

    public genericeOne(slug: string): Observable<any> {return this.sendGetRequest(`GetExportJsonEntityByUrl?Url=${slug}&Locale=en&UseCache=true`);}
        
    private sendGetRequest(url: string): Observable<any> {        
        return this.http.get(`${this.cfg.apiUrl}/${url}`);                 
    }   
}