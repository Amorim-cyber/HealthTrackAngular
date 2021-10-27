import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PesoComponent } from './peso/peso.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    children: [
        {
          path: '',
          component: LoginComponent
        }
    ]
  },
  {
    path: 'cadastro',
    children: [
        {
          path: '',
          component: CadastroComponent
        }
    ]
  },
  {
    path: 'dashboard',
    children: [
        {
          path: '',
          component: DashboardComponent
        }
    ]
  },
  {
    path: 'peso',
    children: [
        {
          path: '',
          component: PesoComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
