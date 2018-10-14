import { ViewBikeDetailsComponent } from './components/view-bike-details/view-bike-details.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bike/:id', component: ViewBikeDetailsComponent },
    { path: 'admin', component: AdminComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }