import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.scss']
})
export class MatriculaComponent implements OnInit {

  curso: any;
  promocion: any;
  promocionAux: any;
  cursoAux: any;
  usuarios_curso: any;

  modo: number = 0;
  newPromocion: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    //get curso var from activatedRoute
    //use activatedRoute.snapshot.paramMap.get('curso')
    //also get promocion
    activatedRoute.paramMap.subscribe(params => {
      //assign curso and promocion
      this.curso = params.get('curso');
      this.promocion = params.get('promocion');
    });


  }

  ngOnInit(): void {
    this.loadData();

  }



  async loadData() {
    let curso = await this.apiService.get('cursos/' + this.curso, {});
    let promocion = await this.apiService.get('promociones/' + this.promocion, {});
    this.promocionAux = promocion;
    console.log(promocion);
    console.log(curso);
    this.cursoAux = curso;
  }

  async obtenerUltimaPromocion() {
    let promocion: any = await this.apiService.get('cursos/ultima/' + this.curso + '/' + this.promocion, {});

    this.newPromocion = promocion.id_promocion;
    console.log(this.newPromocion);
    if (promocion != null) {
      let usuariosAux: any = await this.apiService.get(
        'usuarios/getUsuarios/' +
        promocion.id_curso +
        "/" +
        promocion.id_promocion
        , null);
      this.usuarios_curso = usuariosAux;
      //for let usuario_curso set usuario.curso.matricular = true
      for (let usuario_curso of this.usuarios_curso) {
        usuario_curso.matricular = true;
      }
      console.log(this.usuarios_curso);
    }
    this.modo = 1;
  }


  async matricular() {
    let para_actualizar = [];

    for (let usuario_curso of this.usuarios_curso) {
      if (usuario_curso.matricular) {
        let usuario_curso_aux = {
          cursos_id: +this.curso,
          promociones_id: this.promocion,
          usuario_id: usuario_curso.usuario_id,
          tipo_usuario_id: 7

        }
        para_actualizar.push(usuario_curso_aux);
      }

    }
    console.log(para_actualizar);

    for (let actualizar of para_actualizar) {
      await this.apiService.post('cursos/usuarios_curso', actualizar);
    }
    this.router.navigate(['/administrativos/promociones_curso/' + this.curso + '/' + this.promocion]);


  }
}
