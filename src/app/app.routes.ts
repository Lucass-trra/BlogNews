import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentDetailsComponent } from './pages/content-details/content-details.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },

    {
        path: "contentDetail",
        component: ContentDetailsComponent
    }
];
