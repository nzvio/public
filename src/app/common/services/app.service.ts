import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Lang } from "../../model/orm/lang.entity";

@Injectable()
export class AppService {
    // data    
    public lang: Lang = null;    
    public cfg: any = {};
    // iface
    public headerOpaque: boolean = false;
    // error notifications
    public errorActive: boolean = false;
    public errorMessage: string = "";
    public errorTimer: number = null;  
    
    constructor(
        private titleService: Title,        
        private router: Router,
    ) {}        

    get url(): string[] {return this.router.url.split("/");}
        
    public showError(error: any): void {
        this.errorTimer && clearTimeout(this.errorTimer);
        this.errorMessage = typeof(error) !== "string" ? JSON.stringify(error) : error;        
        this.errorActive = true;
        this.errorTimer = window.setTimeout (() => {
            this.errorActive = false;
            this.errorTimer = null;
        }, 3000);        
        console.log(error);
    }

    public setTitle (title: string) {        
        this.titleService.setTitle(`${this.lang.phrases["common-name"]} - ${title}`);
    }     

    public pause(ms: number): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), ms);
        });
    }   
}