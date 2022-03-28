import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericModule } from './views/generic/generic.module';
import { HomePage } from './views/home/home.page';

const routes: Routes = [
    {path: "", component: HomePage, pathMatch: "full"},
    {path: ":slug", loadChildren: () => GenericModule}, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
