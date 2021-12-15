import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerPromocionComponent implements OnInit {



  formViewPromocion: FormGroup = new FormGroup({
    id_promocion: new FormControl('', ),
    ano: new FormControl(''),
    periodo: new FormControl(''),
    fecha_desde: new FormControl(''),
    fecha_hasta: new FormControl(''),
  });
  promocion: any;
  id: any;
  constructor(activatedRoute: ActivatedRoute, private apiService: ApiService) {
    //get id from url
    const id = activatedRoute.snapshot.paramMap.get('id');
    this.id = id;
    this.loadData();
   }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log('submit');
  }
  async loadData() {
    let promocionAux: any = await this.apiService.get('promociones/' + this.id, {});
    //format promocionAux.fecha_desde to yyyy-MM-dd
    promocionAux.fecha_desde = promocionAux.fecha_desde.substring(0, 10);
    promocionAux.fecha_hasta = promocionAux.fecha_hasta.substring(0, 10);
    //fill formViewPromocion with promocionAux
    this.formViewPromocion.patchValue(promocionAux);
    this.formViewPromocion.disable();
    this.promocion = promocionAux;
    console.log(this.promocion);
  }
}
