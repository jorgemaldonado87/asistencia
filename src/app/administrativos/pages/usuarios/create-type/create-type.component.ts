import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.scss']
})
export class CreateTypeComponent implements OnInit {

  tipo_usuario: any = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  //method to create tipo_usuario async
  //use the http client to make the post request
  //after the post request, navigate to the list of tipo_usuario
  //use try/catch to handle the error
  async createTipoUsuario() {
    try {
      console.log(this.tipo_usuario);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        }),
        body: this.tipo_usuario
      };
      const result = await this.http.post('http://localhost:3000/tipo_usuario/create', httpOptions).toPromise();


      console.log(result);
      this.tipo_usuario = {};
    } catch (error:any) {
      console.log(error);
    }
  }
}
