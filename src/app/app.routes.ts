import { Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { SociaisComponent } from './pages/sociais/sociais.component';
import { GeocienciasComponent } from './pages/geociencias/geociencias.component';
import { EconomiaComponent } from './pages/economicas/economicas.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    
    {
        path: "sociais",
        component: SociaisComponent
    },

    {
        path: "geociencias",
        component: GeocienciasComponent
    },

    {
        path: "economia",
        component: EconomiaComponent
    },

    {
        path: "**",
        redirectTo:""
    },

    
];
