import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppService } from './common/services/app.service';
import { CfgRepository } from './common/services/repositories/cfg.repository';
import { LangRepository } from './common/services/repositories/lang.repository';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit {	
	public ready: boolean = false;
	
	constructor(
		private appService: AppService,
		private cfgRepository: CfgRepository,
		private langRepository: LangRepository,		
		private router: Router,				
	) {}
	
	public async ngOnInit(): Promise<void> {
		await this.initLangs();
		await this.initCfg(); // cfg before data from back-end		
		this.ready = true;
		//this.removePreloader();
	}

	public ngAfterViewInit(): void {		
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(event => window.scrollY && setTimeout(() => window.scrollTo(0, 0), 1));
	}    

	private async initCfg(): Promise<void> {
		try {
			this.appService.cfg = await this.cfgRepository.loadAll();			
		} catch (err) {
			this.appService.showError(err);
		}
	}

	private async initLangs(): Promise<void> {
		try {
			const ll = await this.langRepository.loadAll();			
			this.appService.lang = ll[0]; // now using single lang			
		} catch (err) {
			this.appService.showError(err);			
		}		
	}	

    /*
	private removePreloader(): void {
		document.getElementById("preloader").remove();
	}
    */	

	@HostListener('window:scroll') 
	public onScroll(): void {
		this.appService.headerOpaque = window.scrollY > 60;
	}
}
