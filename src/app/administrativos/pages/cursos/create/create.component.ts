import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateCursosComponent implements OnInit {
  curso: any = {};
  tipo_cursos: any;
  constructor(
    private apiService : ApiService,
    private router: Router
     ) { }

  ngOnInit(): void {
    this.loadData();
  }


  //createCurso method
  async createCurso() {
    console.log(this.curso);
    let curso = await this.apiService.post('cursos', this.curso);
    console.log(curso);
    this.router.navigate(['/cursos']);

    console.log(this.curso);
  }

  async loadData() {
    let tipo_cursos = await this.apiService.get('tipo_curso', {});
    this.tipo_cursos = tipo_cursos;

  }

}
