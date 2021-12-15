import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  //redirect tologin route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //login route assigned to component
  {
    path: 'login',
    component: LoginComponent
  },
  //register route assigned to component
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },

  //load administrativos module route
  {
    path: 'administrativos',
    loadChildren: () =>
      import('./administrativos/administrativos.module').
        then(mod => mod.AdministrativosModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
