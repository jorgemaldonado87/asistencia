import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: any;

  constructor(private router: Router) {


  }

  ngOnInit() {
    let user = localStorage.getItem('usuario');
    let usuarioAux = JSON.parse(user || '{}');
    this.usuario = usuarioAux;

  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

}
