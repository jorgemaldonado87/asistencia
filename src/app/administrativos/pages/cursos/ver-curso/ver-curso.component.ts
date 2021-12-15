import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.scss']
})
export class VerCursoComponent implements OnInit {
  id: any;

  curso: any;
  //get curso id from
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService) {
    //get id from url
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.loadData();
    });
  }

  ngOnInit(): void {
  }


  //method loadData to load data from api
  async loadData() {
    let response:any = await this.api.get('cursos/' + this.id, {});
    this.curso = response;
    console.log(this.curso);
  }

}
