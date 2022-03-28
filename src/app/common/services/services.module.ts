import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { DataService } from './data.service';
import { LangRepository } from './repositories/lang.repository';
import { CfgRepository } from './repositories/cfg.repository';
import { GenericRepository } from './repositories/generic.repository';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        AppService,
        DataService,        
        CfgRepository,
        LangRepository,     
        GenericRepository,           
    ],
})
export class ServicesModule {}
