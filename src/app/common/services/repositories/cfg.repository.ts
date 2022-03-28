import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CfgRepository {    
    constructor(private http: HttpClient) {}

    public loadAll(): Promise<any> {
        return new Promise((resolve, reject) => 
            this.http
                .get("/assets/json/cfg.json")
                .subscribe(
                    res => resolve(res), 
                    err => reject(err.message)));
    }    
}
