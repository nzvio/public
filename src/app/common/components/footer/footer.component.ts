import { Component } from "@angular/core";
import { Lang } from "src/app/model/orm/lang.entity";
import { AppService } from "../../services/app.service";

@Component({
    selector: "the-footer",
    templateUrl: "footer.component.html",
    styleUrls: ["footer.component.scss"],
})
export class FooterComponent {
    constructor(private appService: AppService) {}

    get lang(): Lang {return this.appService.lang;}
}