import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/common/components/components.module";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { GenericPage } from "./generic.page";

let routes = RouterModule.forChild ([            
	{path: "**", component: GenericPage},	
]);

@NgModule({	
    imports: [	
		CommonModule,
		RouterModule,
        FormsModule,                
		ComponentsModule,
		routes,
	],
	declarations: [
		GenericPage,
		GalleryComponent,
	],    		    
})
export class GenericModule {}