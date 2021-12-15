import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.scss']
})
export class CrearAsignaturaComponent implements OnInit {

  asignatura: any = {};

  constructor(
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async crearAsignatura(){
    let response = await this.apiService.post('asignaturas', this.asignatura);
    console.log(response);
    this.router.navigate(['/administrativos/asignaturas']);
  }

}
