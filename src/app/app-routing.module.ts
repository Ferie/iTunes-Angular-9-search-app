import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/pages/search/search.module').then((m) => m.SearchModule),
    },
    {
        path: 'history',
        pathMatch: 'full',
        loadChildren: () => import('./modules/pages/history/history.module').then((m) => m.HistoryModule),
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
