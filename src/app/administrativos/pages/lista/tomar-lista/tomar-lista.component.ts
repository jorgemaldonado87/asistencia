import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tomar-lista',
  templateUrl: './tomar-lista.component.html',
  styleUrls: ['./tomar-lista.component.scss']
})
export class TomarListaComponent implements OnInit {
  current_bloque: any;
  current_profesor: any;
  current_asignatura: any;
  current_date: Date = new Date();
  rutProfesor: any = '13669251-8';
  promocion_curso: any;
  curso: any;
  promocion: any;
  usuarios_curso: any;
  current_user: any;
  current_user_index: any = 0;
  bloques: any;
  asignaturas: any;
  tomarLista: boolean = false;
  listaTomada: boolean = false;
  listaTomadaAux: any =  [];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    //get curso and promocion params from url and assing to variables
    this.activatedRoute.params.subscribe(async (params) => {
      this.promocion = params.promocion;
      this.curso = params.curso
      console.log(this.promocion_curso);
    });

  }


  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    let promocion_cursoAux: any = await this.apiService.get('cursos/' + this.curso + "/" + this.promocion, null);

    this.promocion_curso = promocion_cursoAux[0];
    if (this.promocion_curso != null) {
      let usuariosAux: any = await this.apiService.get(
        'usuarios/getUsuarios/' +
        this.promocion_curso.id_curso +
        "/" +
        this.promocion_curso.id_promocion
        , null);

      this.usuarios_curso = usuariosAux;
      this.current_user = this.usuarios_curso[this.current_user_index];
      console.log(this.current_user);
    }

    let bloquesAux: any = await this.apiService.get('bloques', null);
    this.bloques = bloquesAux;

    let asignaturasAux: any = await this.apiService.get('asignaturas', null);
    this.asignaturas = asignaturasAux;
    console.log(bloquesAux);
    console.log(this.promocion_curso);
  }


  async cambiarEstado(estado: boolean) {

    let asistencia = {
      fecha: this.current_date,
      status: estado,
      bloque_id: this.current_bloque.id_bloques,
      asignaturas_id: this.current_asignatura.id,
      cursos_id: this.curso,
      alumno_id: this.current_user.usuario_id,
      profesor_id: this.current_profesor.id_usuario
    }


    try {
      let asistenciaAux = await this.apiService.post('asistencia', asistencia);
      console.log(asistenciaAux);
      console.log(this.current_user);
      console.log(this.usuarios_curso);
      console.log(this.current_user_index);
      console.log(this.usuarios_curso.length);
      this.current_user_index++;
      if(this.current_user_index <= this.usuarios_curso.length - 1){

        this.current_user = this.usuarios_curso[this.current_user_index];
        this.listaTomadaAux.push(asistenciaAux);
      }
      else{
        this.listaTomada = true;
        this.tomarLista = false;
        this.listaTomadaAux.push(asistenciaAux);
      }




      console.log(asistenciaAux);
    } catch (e) {
      console.log(e);
    }


  }


  async buscarProfesor() {
    let profesor: any = await this.apiService.get('usuarios/profesor/getByRut/' + this.rutProfesor, null);
    this.current_profesor = profesor;
    console.log(profesor);
  }
}
