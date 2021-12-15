import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cursostypes',
  templateUrl: './cursostypes.component.html',
  styleUrls: ['./cursostypes.component.scss']
})
export class CursostypesComponent implements OnInit {

  tipos_cursos: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadData();
  }
  //editar method
  editar() {


  }
  //eliminar method
  eliminar() {

  }

  async loadData(){
    //load tipo cursos from
    let tipoCursosAux = await this.apiService.get('tipo_curso', {});
    console.log(tipoCursosAux);
    this.tipos_cursos = tipoCursosAux;
  }
}
