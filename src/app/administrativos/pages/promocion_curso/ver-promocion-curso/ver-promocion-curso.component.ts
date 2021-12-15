import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ver-promocion-curso',
  templateUrl: './ver-promocion-curso.component.html',
  styleUrls: ['./ver-promocion-curso.component.scss']
})
export class VerPromocionCursoComponent implements OnInit {
  rut_buscar: any;
  promocion_curso: any;
  curso: any;
  promocion: any;
  usuarios_curso: any;
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
    }
    console.log(this.promocion_curso);
  }

  buscar_alumno(){

  }

}
