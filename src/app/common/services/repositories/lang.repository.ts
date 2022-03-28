import { Injectable } from '@angular/core';
import { Lang } from 'src/app/model/orm/lang.entity';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LangRepository {
    constructor(private http: HttpClient) {}

    public loadAll(): Promise<Lang[]> {
        return new Promise((resolve, reject) => 
            this.http
                .get<Lang[]>("/assets/json/languages.json")
                .subscribe(
                    res => resolve(res.map(d => new Lang().build(d))), 
                    err => reject(err.message)));
    }    
}
