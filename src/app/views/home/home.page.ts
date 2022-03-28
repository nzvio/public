import { Component, OnInit } from "@angular/core";
import { Lang } from "src/app/model/orm/lang.entity";
import { AppService } from "src/app/common/services/app.service";

@Component({
    selector: "home-page",
    templateUrl: "home.page.html",    
})
export class HomePage implements OnInit {
    constructor(
        private appService: AppService,        
    ) {}
    
    get lang(): Lang {return this.appService.lang;}        

    public ngOnInit(): void {        
        this.initTitle();           
    }
    
    private initTitle(): void {
        this.appService.setTitle(this.lang.phrases["home-title"]);        
    }    
}