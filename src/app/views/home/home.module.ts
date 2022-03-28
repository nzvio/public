import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/common/components/components.module";
import { HomePage } from "./home.page";

@NgModule({	
    imports: [	
		CommonModule,
		RouterModule,
        FormsModule,        
		ComponentsModule,
	],
	declarations: [
		HomePage,
	],    		    
})
export class HomeModule {}