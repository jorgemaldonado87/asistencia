import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  user_types: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadData();
  }


  async loadData(){
    let tipos_usuario:any = await this.apiService.get('tipo_usuario', {});
    this.user_types = tipos_usuario;
  }

  //eliminar method
  eliminar(usuario: any) {
    console.log(usuario);
  }
  //editar method
  editar(usuario: any) {
    console.log(usuario);
  }
}
