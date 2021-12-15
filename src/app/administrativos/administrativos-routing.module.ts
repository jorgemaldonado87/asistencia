import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AdministrativosComponent } from './administrativos.component';
import { CrearAsignaturaComponent } from './pages/asignaturas/crear-asignatura/crear-asignatura.component';
import { ListaAsignaturasComponent } from './pages/asignaturas/lista-asignaturas/lista-asignaturas.component';
import { CreateCursosComponent } from './pages/cursos/create/create.component';
import { CursostypesCrearComponent } from './pages/cursos/cursostypes-crear/cursostypes-crear.component';
import { CursostypesComponent } from './pages/cursos/cursostypes/cursostypes.component';
import { CursosListComponent } from './pages/cursos/list/list.component';
import { VerCursoComponent } from './pages/cursos/ver-curso/ver-curso.component';
import { HomeComponent } from './pages/home/home.component';
import { TomarListaComponent } from './pages/lista/tomar-lista/tomar-lista.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { CrearPromocionesComponent } from './pages/promociones/crear/crear.component';
import { ListPromocionesComponent } from './pages/promociones/list/list.component';
import { VerPromocionComponent } from './pages/promociones/ver/ver.component';
import { VerPromocionCursoComponent } from './pages/promocion_curso/ver-promocion-curso/ver-promocion-curso.component';
import { CreateTypeComponent } from './pages/usuarios/create-type/create-type.component';
import { CreateUserComponent } from './pages/usuarios/create-user/create-user.component';
import { EditComponent } from './pages/usuarios/edit/edit.component';
import { UsuariosListComponent } from './pages/usuarios/list/list.component';
import { TypesComponent } from './pages/usuarios/types/types.component';


const routes: Routes = [

  {
    path: '',
    component: AdministrativosComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService]
      },
      //users-create route
      {
        path: 'usuarios/create',
        component: CreateUserComponent
      },
      //create user type route
      {
        path: 'usuarios/create/type',
        component: CreateTypeComponent,
        canActivate: [AuthGuardService],
      },
      //list route
      {
        path: 'usuarios/list',
        component: UsuariosListComponent,
      },
      //edit usuario route
      {
        path: 'usuarios/edit/:id',
        component: EditComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'usuarios/types',
        component: TypesComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'cursos/types',
        component: CursostypesComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'cursos/types/create',
        component: CursostypesCrearComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'cursos',
        component: CursosListComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'cursos/crear',
        component: CreateCursosComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'cursos/ver/:id',
        component: VerCursoComponent,
      },
      {
        path: 'promociones',
        component: ListPromocionesComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'promociones/crear',
        component: CrearPromocionesComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'promociones/ver/:id',
        component: VerPromocionComponent,
        canActivate: [AuthGuardService],
      },

      {
        path: 'promociones_curso/:curso/:promocion',
        component: VerPromocionCursoComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'tomar_lista/:curso/:promocion',
        component: TomarListaComponent,
        canActivate: [AuthGuardService],
      },
      //asignaturas route
      {
        path: 'asignaturas',
        component: ListaAsignaturasComponent,
      },
      //asiignaturas crear
      {
        path: 'asignaturas/crear',
        component: CrearAsignaturaComponent,
      },
      {
        path: 'matricula/:curso/:promocion',
        component: MatriculaComponent,
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativosRoutingModule { }
