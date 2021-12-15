
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cursostypes-crear',
  templateUrl: './cursostypes-crear.component.html',
  styleUrls: ['./cursostypes-crear.component.scss']
})
export class CursostypesCrearComponent implements OnInit {

  tipo_curso: any = {};
  constructor(
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  //method to create tipo_usuario async
  //use the http client to make the post request
  //after the post request, navigate to the list of tipo_usuario
  //use try/catch to handle the error
  async createTipoUsuario() {
    try {

      const result = await this.apiService.post('tipo_curso', this.tipo_curso);
      console.log(result);
      this.router.navigate(['/administrativos/cursos/types']);

      this.tipo_curso = {};
    } catch (error:any) {
      console.log(error);
    }
  }

}
