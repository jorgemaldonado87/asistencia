import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UsuariosListComponent implements OnInit {
  filter: any = {
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    rut:'',
  };
  usuarios: any;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  //editar method
  editar(usuario: any) {

    console.log(usuario);
    this.router.navigate(['/administrativos/usuarios/edit/'+usuario.id_usuario]);
  }
  //eliminar method
  eliminar(usuario: any) {
    console.log(usuario);
  }
  //async load data
  async loadData() {
    //remove all filter element that is empty or ''

    this.usuarios = await this.apiService.get('usuarios', this.filter);
    console.log(this.usuarios);
  }

}
