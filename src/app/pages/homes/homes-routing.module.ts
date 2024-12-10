import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Component
import { IndexComponent } from './index/index.component';
import { LoadSettingsComponent } from './load-settings/load-settings.component';

const routes: Routes = [
    {
        path:'', component:LoadSettingsComponent
    },
    {
        path: 'fashion-store-v1', component: IndexComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomesRoutingModule { }
