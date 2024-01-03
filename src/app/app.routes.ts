import { Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { ContentDetailsComponent } from './pages/content-details/content-details.component';
import { BusinessComponent } from './pages/business/business.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { HealthComponent } from './pages/health/health.component';
import { ScienceComponent } from './pages/science/science.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TechnologyComponent } from './pages/technology/technology.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },

    {
        path: "business",
        component: BusinessComponent
    },


    {
        path: "entertainment",
        component: EntertainmentComponent
    },


    {
        path: "health",
        component: HealthComponent
    },


    {
        path: "science",
        component: ScienceComponent
    },


    {
        path: "sports",
        component: SportsComponent
    },


    {
        path: "technology",
        component: TechnologyComponent
    },

    {
        path: "contentDetail/:id",
        component: ContentDetailsComponent
    }
];
