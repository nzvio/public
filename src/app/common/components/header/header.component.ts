import { Component } from "@angular/core";
import { Lang } from "src/app/model/orm/lang.entity";
import { AppService } from "../../services/app.service";

@Component({
    selector: "the-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"],
})
export class HeaderComponent {
    constructor(private appService: AppService) {}

    get opaque(): boolean {return this.appService.headerOpaque;}
    get lang(): Lang {return this.appService.lang;}      
}