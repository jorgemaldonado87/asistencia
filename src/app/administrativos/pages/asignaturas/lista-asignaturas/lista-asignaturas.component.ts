import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.component.html',
  styleUrls: ['./lista-asignaturas.component.scss']
})
export class ListaAsignaturasComponent implements OnInit {

  asignaturas: any;

  constructor(
    private apiService: ApiService,
    private router: Router,

  ) { }


  ngOnInit(): void {
    this.loadData();
  }

  async loadData(){
    let asignaturas:any = await this.apiService.get('asignaturas',{});
    console.log(asignaturas);
    this.asignaturas = asignaturas;
  }


}
