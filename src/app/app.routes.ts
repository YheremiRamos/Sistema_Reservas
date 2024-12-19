import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';
import { AddCrearEventosComponent } from './add-crear-eventos/add-crear-eventos.component';
import { ExplorarEventosComponent } from './add-explorar-eventos/add-explorar-eventos.component';
import { AddMisEventosComponent } from './add-mis-eventos/add-mis-eventos.component';


export const routes: Routes = [


    {path:"addCrearEvento", component:  AddCrearEventosComponent},
    {path:"addExplorarEvento", component:  ExplorarEventosComponent},
    {path:"addMisEvento", component:  AddMisEventosComponent},


    { path: '', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }

    
  ];
  
