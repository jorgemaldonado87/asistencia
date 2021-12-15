import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrativos',
  templateUrl: './administrativos.component.html',
  styleUrls: ['./administrativos.component.scss']
})
export class AdministrativosComponent implements OnInit {
  usuario: any;

  menu: any =  [

    {
      name: 'USUARIOS',
      type: 'group'
    },
    {
      name: 'Lista de usuarios',
      link: 'usuarios/list',
      icon: 'fa fa-user',
      type: 'simple'
    },
    {
      name: 'Crear usuario',
      link: 'usuarios/create',
      icon: 'fa fa-plus',
      type: 'simple'
    },
    /* {
      name: 'TIPOS USUARIOS',
      type: 'group'
    },
    {
      name: 'Lista de tipos usuario',
      link: 'usuarios/types',
      icon: 'fa fa-user-cog',
      type: 'simple'
    },
    {
      name: 'Crear tipo usuario',
      link: 'usuarios/create/type',
      icon: 'fa fa-plus',
      type: 'simple'
    },*/
    {
      name: 'Cursos',
      type: 'group'
    },
    {
      name: 'Lista de cursos',
      link: 'cursos',
      icon: 'fa fa-graduation-cap',
      type: 'simple'
    },
    {
      name: 'Crear Curso',
      link: 'cursos/crear',
      icon: 'fa fa-plus',
      type: 'simple'
    },

    /*{
      name: 'TIPOS CURSO',
      type: 'group'
    },
    {
      name: 'Lista de tipos de curso',
      link: 'cursos/types',
      icon: '',
      type: 'simple'
    },
    {
      name: 'Crear tipo curso',
      link: 'cursos/types/create',
      icon: '',
      type: 'simple'
    },*/
    {
      name: 'PROMOCIONES',
      type: 'group'
    },
    {
      name: 'Lista de promociones',
      link: 'promociones',
      icon: 'fa fa-calendar',
      type: 'simple'
    },
    {
      name: 'Crear promocion',
      link: 'promociones/crear',
      icon: 'fa fa-plus',
      type: 'simple'
    },
    {
      name: 'Asignaturas',
      type: 'group'
    },
    {
      name: 'Lista de asignaturas',
      link: 'asignaturas',
      icon: 'fa fa-calendar',
      type: 'simple'
    },
    {
      name: 'Crear asignatura',
      link: 'asignaturas/crear',
      icon: 'fa fa-plus',
      type: 'simple'
    },
  ]


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  }

  navigateTo(url: string): void {
    console.log(url);
    //navigate to url
    this.router.navigateByUrl(url);
  }


  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
