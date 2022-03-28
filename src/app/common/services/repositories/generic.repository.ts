import { Injectable } from "@angular/core";
import { DataService } from "../data.service";
import { CrmRepository } from "./_crm.repository";

@Injectable()
export class GenericRepository extends CrmRepository {
    constructor(protected dataService: DataService) {
        super();
    }

    public loadOne(slug: string): Promise<any> {
        return new Promise((resolve, reject) => 
            this.dataService
                .genericeOne(slug)
                .subscribe(
                    res => resolve(this.processResponse(res)),
                    err => reject(err.message)));
    }
}