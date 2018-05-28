import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { NewComponent } from './new/new.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppEditComponent } from './app-edit/app-edit.component';


const appRoutes: Routes = [
    {path:"contact/:id", component: AppContactComponent, 
        children: [
            {path:"edit/:id", component: AppEditComponent},
            {path:"new", component: NewComponent},
        ]
    },    
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}


