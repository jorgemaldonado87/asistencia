import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  formCreateUser: FormGroup = new FormGroup({});
  tipos_usuario: any;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }
  //user has nombre,apellido_paterno,apellido_materno email, telefono, password,
  //create array with 20 different names without repetitions
  names = [
    'Juan',
    'Pedro',
    'Carlos',
    'Jorge',
    'Luis',
    'Javier',
    'Miguel',
    'Daniel',
    'Ricardo',
    'Juan',
    'Pedro',
    'Carlos',
    'Jorge',
    'Luis',
    'Javier',
    'Miguel',
    'Daniel',
    'Ricardo',
    'Juan',
    'Pedro',
    'Carlos',
    'Jorge',
    'Luis',


  ];

  female_names = [
      //add 10 female names
      'Javiera',
      'Verónica',
      'Valeria',
      'Jessica',
      'Vanessa',
      'Elsa',
      'Renata',
      'Sofía',
      'Camila',
      'María',
      'Constanza',
      'Fernanda',
      'Elena',
      'Paula',
      'Lorena',
      'María',
      'Constanza',
      'Rosa',
      'Ana',
      'Luz',
      'Rocela',
  ]

  //generate array with 20 different surnames without repetitions
  surnames = [
    'Gonzalez',
    'Perez',
    'Rodriguez',
    'Lopez',
    'Jara',
    'Ahumada',
    'Garcia',
    'Sanchez',
    'Maldonado',
    'Urrutia',
    'Troncoso',
    'Fernandez',
    'Gutierrez',
    'Espinoza',
    'Cabrera',
    'Vega',
    'Cano',
    'Pardo',
    'Soto',
    'Mendoza',
  ];

  //method to generate valid chilean rut
  generateRut() {
    //generate random 8 digit number
    let rut = Math.floor(Math.random() * 100000000);
    //generate random number of 1 digit
    let dv = Math.floor(Math.random() * 10);

    return rut + '-' + dv;
  }



  //method to generate random users
  //each user has a nombre, apelliido_paterno, apellido_materno, email, telefono, password
  //each user nombre is a random name from names array
  //each user apellido_paterno is a random surname from surnames array
  //each user apellido_materno is a random surname from surnames array
  //each user email is a random email from names array + random number from 1 to 100 + @gmail.com
  //each user telefono is a random number from 1 to 100000000
  //each user password is 12345678
  //generate 1400 users
  generateUsers() {
    for (let i = 0; i < 700; i++) {
      let nombre = this.names[Math.floor(Math.random() * this.names.length)] + " " +  this.names[Math.floor(Math.random() * this.names.length)];
      let apellido_paterno = this.surnames[Math.floor(Math.random() * this.surnames.length)];
      let apellido_materno = this.surnames[Math.floor(Math.random() * this.surnames.length)];
      let email = nombre + Math.floor(Math.random() * 100) + '@gmail.com';
      let telefono = Math.floor(Math.random() * 100000000);
      let password = '12345678';
      let rut = this.generateRut();
      let tipo_usuario = Math.floor(Math.random() * 3) + 1;
      let user = {
        nombre: nombre,
        apellido_paterno: apellido_paterno,
        apellido_materno: apellido_materno,
        email: email,
        telefono: telefono,
        password: password,
        rut: rut,

      };
      this.apiService.post('usuarios', user).then(res => {
        console.log(res);
      });
    }
    for (let i = 0; i < 700; i++) {
      let nombre = this.female_names[Math.floor(Math.random() * this.female_names.length)] + " " +  this.female_names[Math.floor(Math.random() * this.female_names.length)];
      let apellido_paterno = this.surnames[Math.floor(Math.random() * this.surnames.length)];
      let apellido_materno = this.surnames[Math.floor(Math.random() * this.surnames.length)];
      let email = nombre + Math.floor(Math.random() * 100) + '@gmail.com';
      let telefono = Math.floor(Math.random() * 100000000);
      let password = '12345678';
      let rut = this.generateRut();
      let tipo_usuario = Math.floor(Math.random() * 3) + 1;
      let user = {
        nombre: nombre,
        apellido_paterno: apellido_paterno,
        apellido_materno: apellido_materno,
        email: email,
        telefono: telefono,
        password: password,
        rut: rut,

      };
      this.apiService.post('usuarios', user).then(res => {
        console.log(res);
      });
    }
  }

  ngOnInit(): void {
    this.formCreateUser = this.formBuilder.group({
      rut: new FormControl('', [Validators.required]),
      nombre: new FormControl('Raul', Validators.required),
      apellido_paterno: new FormControl(''),
      apellido_materno: new FormControl(''),
      email: new FormControl(''),
      telefono: new FormControl(''),
      password: new FormControl(''),
      password_confirmation: new FormControl(''),
      tipo_usuario: new FormControl(''),
    });
    this.loadData();
  }


  async loadData() {
    //use api service to get tipo_usuario
    let tipos_usuario = await this.apiService.get('tipo_usuario', {});
    this.tipos_usuario = tipos_usuario;
  }


  //onSubmit method to create user
  //use try/catch to handle errors

  async onSubmit() {
    try {
      let data = this.formCreateUser.value;
      let user = await this.apiService.post('usuarios', data);
      console.log(data);
      this.router.navigate(['usuarios/list']);
    } catch (error) {
      console.log(error);
    }


  }




}
