import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativosComponent } from './administrativos.component';
import { HomeComponent } from './pages/home/home.component';
import { AdministrativosRoutingModule } from './administrativos-routing.module';
import { CreateUserComponent } from './pages/usuarios/create-user/create-user.component';
import { CreateTypeComponent } from './pages/usuarios/create-type/create-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { UsuariosListComponent } from './pages/usuarios/list/list.component';
import { EditComponent } from './pages/usuarios/edit/edit.component';
import { TypesComponent } from './pages/usuarios/types/types.component';
import { CursosListComponent } from './pages/cursos/list/list.component';
import { CursostypesComponent } from './pages/cursos/cursostypes/cursostypes.component';
import { CursostypesCrearComponent } from './pages/cursos/cursostypes-crear/cursostypes-crear.component';
import { CreateCursosComponent } from './pages/cursos/create/create.component';
import { CrearPromocionesComponent } from './pages/promociones/crear/crear.component';
import { ListPromocionesComponent } from './pages/promociones/list/list.component';
import {  VerPromocionComponent } from './pages/promociones/ver/ver.component';
import { VerPromocionCursoComponent } from './pages/promocion_curso/ver-promocion-curso/ver-promocion-curso.component';
import { TomarListaComponent } from './pages/lista/tomar-lista/tomar-lista.component';
import { NgChartsModule } from 'ng2-charts';
import { VerCursoComponent } from './pages/cursos/ver-curso/ver-curso.component';
import { ListaAsignaturasComponent } from './pages/asignaturas/lista-asignaturas/lista-asignaturas.component';
import { CrearAsignaturaComponent } from './pages/asignaturas/crear-asignatura/crear-asignatura.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';





@NgModule({
  declarations: [
    AdministrativosComponent,
    HomeComponent,
    CreateUserComponent,
    CreateTypeComponent,
    UsuariosListComponent,
    EditComponent,
    TypesComponent,
    CursosListComponent,
    CursostypesComponent,
    CursostypesCrearComponent,
    CreateCursosComponent,
    ListPromocionesComponent,
    CrearPromocionesComponent,
    VerPromocionComponent,
    VerPromocionCursoComponent,
    TomarListaComponent,
    VerCursoComponent,
    ListaAsignaturasComponent,
    CrearAsignaturaComponent,
    MatriculaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdministrativosRoutingModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [
    ApiService
  ],
})
export class AdministrativosModule { }
