import { Component, OnInit } from "@angular/core";
import { Lang } from "src/app/model/orm/lang.entity";
import { AppService } from "src/app/common/services/app.service";
import { GenericRepository } from "src/app/common/services/repositories/generic.repository";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "generic-page",
    templateUrl: "generic.page.html",    
})
export class GenericPage implements OnInit {
    public images: string[] = ["/assets/img/temp/dog1.jpg", "/assets/img/temp/dog2.jpg", "/assets/img/temp/dog3.jpg"];
    
    constructor(
        private appService: AppService,        
        private genericRepository: GenericRepository,
        private route: ActivatedRoute,
    ) {}
    
    get lang(): Lang {return this.appService.lang;}        

    public ngOnInit(): void {        
        this.initEntity(this.route.snapshot.params["slug"]);   
        this.initTitle();                
    }

    private async initEntity(slug: string): Promise<void> {
        try {
            const data = await this.genericRepository.loadOne(slug);
            console.log(data);
        } catch (err) {
            this.appService.showError(err);
        }
    }
    
    private initTitle(): void {
        this.appService.setTitle("[generic]");        
    }    
}