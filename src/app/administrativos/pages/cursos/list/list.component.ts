import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CursosListComponent implements OnInit {
  cursos: any;
  constructor(private router: Router,private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadData();
  }
  //editar method
  editar(usuario: any) {


  }
  //eliminar method
  eliminar(usuario: any) {

  }

  //loadData method
  async loadData() {
    const response = await this.apiService.get('cursos', {});
    this.cursos = response;
    console.log(response);

  }
}
