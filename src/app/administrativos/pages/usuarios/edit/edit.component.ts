import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formCreateUser: FormGroup = new FormGroup({});
  id_usuario: any;
  usuarioAux: any;
  tipos_usuarios: any;
  tipo_seleccionado: any;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
    ) {
    //get id from activated route
    this.activatedRoute.params.subscribe(async params => {
      console.log(params.id)
      this.id_usuario = params.id;
      await this.loadData();
    });

  }

  ngOnInit(): void {
    this.formCreateUser = this.formBuilder.group({
      rut: new FormControl('', [Validators.required]),
      nombre: new FormControl('', Validators.required),
      apellido_paterno: new FormControl(''),
      apellido_materno: new FormControl(''),
      email: new FormControl(''),
      telefono: new FormControl(''),
      password: new FormControl(''),
      password_confirmation: new FormControl(''),
      tipo_usuario: new FormControl(''),
    });
  }
  async onSubmit() {
    console.log(this.formCreateUser.value);
    let response = await this.apiService.post('usuarios/'+this.id_usuario, this.formCreateUser.value);
    console.log(response);
    this.router.navigate(['/administrativos/usuarios/list']);
  }

  //loadData method to async load user from api service and assign it to formCreateUser
  async loadData() {
    try{
      const user = await this.apiService.get('usuarios/getById?id='+this.id_usuario, {});
      console.log(user);
      this.tipos_usuarios = await this.apiService.get('tipo_usuario', {});
      this.usuarioAux = user;
      this.formCreateUser.patchValue(user);
    }catch(error){
      console.log(error);
    }

  }

  async agregarTipoUsuario() {
    let selected: any;
    for(let t of this.tipos_usuarios){
      if(t.nombre == this.tipo_seleccionado){

        selected = t;
      }
    }
    console.log(selected);
    let nuevaAsignacion = {
      id_usuario: this.id_usuario,
      id_tipo_usuario: selected.id
    };
    let response  = await this.apiService.post('usuarios/agregarTipo', nuevaAsignacion);
    console.log(response);
    await this.loadData();
  }

}
