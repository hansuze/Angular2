/**
 * Created by hansuze on 2017/2/6.
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent} from './heroes.component';

const routers: Routes = [
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },

    {
        path: 'dashboard', component: DashboardComponent
    },

    {
        path: 'detail/:id', component: HeroDetailComponent
    },

    {
        path: 'heroes', component: HeroesComponent
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routers)
    ],

    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}