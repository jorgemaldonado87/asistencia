import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  asignaturas: any;
  user: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  //login method
  async login() {
    //login using this.http and get method
    //use try/catch to handle error
    try {
      const response: any = await this.http.get('http://192.168.18.39:3000/auth/login?email=' + this.user.email + '&password=' + this.user.password).toPromise();

      localStorage.setItem('usuario', JSON.stringify(response.usuario));
      //if response.usuario.tipo_usuarios lenght > 0 then redirect to home page
      //else show error message
      if (response.usuario.tipo_usuarios.length > 0) {
        //if have only 1 type of user
        if (response.usuario.tipo_usuarios.length === 1) {
          //ask if tipo_usuarios[0].nombre is 'Administrador'
          if (response.usuario.tipo_usuarios[0].nombre === 'Administrativos') {
            this.router.navigate(['/administrativos']);
          } else {
            alert('Usuario no tiene privelgios, favor contactar al administrador');
          }
          alert(response.usuario.tipo_usuarios);

        } else {
          for (let i = 0; i < response.usuario.tipo_usuarios.length; i++) {
            if (response.usuario.tipo_usuarios[i].nombre === 'Administrativos') {
              this.router.navigate(['/administrativos']);
            }
          }
        }
      }
    }
    catch (error: any) {
     alert(error.message);
    }
  }

  //register method to redirect to register page
  register() {
    this.router.navigate(['/register']);
  }

}
