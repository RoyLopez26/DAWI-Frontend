import {Component} from '@angular/core';
import {AppMaterialModule} from '../../app.material.module';
import {DeporteService} from "../../services/deporte.service";
import {Deporte} from "../../models/deporte.model";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ModalidadService} from "../../services/modalidad.service";
import {Modalidad} from "../../models/modalidad.model";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-modalidad',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './add-modalidad.component.html',
  styleUrl: './add-modalidad.component.css'
})
export class AddModalidadComponent {

  lstDeportes : Deporte[] = []

  objModalidad : Modalidad = {
    nombre : "",
    numHombres : 0,
    numMujeres : 0,
    edadMaxima : 0,
    edadMinima : 0,
    sede : "",
    deporte : {
      idDeporte : -1
    }
  }

  constructor(private deporteService: DeporteService, private modalidadService : ModalidadService) {
    this.deporteService.listaDeporte().subscribe(
      x => this.lstDeportes = x
    )
  }

  inserta() {
    this.modalidadService.registraModalidad(this.objModalidad).subscribe(
      x => Swal.fire({icon: 'success', title: 'Resultado del Registro - Roy', text: x.errors})
    )
  }

}
