import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPromocionesComponent implements OnInit {

  promociones:any;

  constructor(private apiService: ApiService, private router: Router) {

   }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    let promocionesAux:any = await this.apiService.get('promociones', {});
    this.promociones = promocionesAux;
    console.log(this.promociones);
  }

  ver(promocion_id:any){
    //redireccionar a la vista de la promocion
    this.router.navigate(['/administrativos/promociones/ver/'+promocion_id]);
  }

}
