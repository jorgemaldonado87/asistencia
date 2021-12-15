import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearPromocionesComponent implements OnInit {
  formCreatePromocion: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.formCreatePromocion = this.formBuilder.group({
      ano: new FormControl('', [Validators.required]),
      periodo: new FormControl('', Validators.required),
      fecha_desde: new FormControl(''),
      fecha_hasta: new FormControl(''),

    });
  }


  async onSubmit() {
    console.log(this.formCreatePromocion.value);
    //crete promocion through apiService
    //use apiService.post
    //use try/catch to handle errors

    //use router.navigate to redirect to list
    try {
      await this.apiService.post('promociones', this.formCreatePromocion.value);

      this.formCreatePromocion.reset();
    }
    catch (error) {
      console.error(error);
    }

  }
}
