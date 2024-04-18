import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  disableInput:boolean=false;

  salas: any[]=[

    { id:0,
      designation: 'Salas de aulas Teóricas',
      funcional: 1,
      nfuncional:5
    },
    {id:1,
      designation: 'Salas de Informaticas',
      funcional: 1,
      nfuncional:5
    },
    {id:2,
      designation: 'Laboratórios de Automação',
      funcional: 1,
      nfuncional:5
    },
    {
      id:3,
      designation: 'Laboratórios de Biologia',
      funcional: 1,
      nfuncional:5
    },
    {
      id:4,
      designation: 'Laboratórios de CAD',
      funcional: 1,
      nfuncional:6
    },
    {
      id:5,
      designation: 'Laboratórios de CNC',
      funcional: 1,
      nfuncional:6
    },
    {
      id:6,
      designation: 'Laboratórios de Electónica',
      funcional: 1,
      nfuncional:6
    },
    {
      id:7,
      designation: 'Laboratórios de Energia Renováveis',
      funcional: 1,
      nfuncional:6
    },
    {
      id:8,
      designation: 'Laboratórios de Física',
      funcional: 1,
      nfuncional:6
    },
    {
      id:9,
      designation: 'Laboratórios de Frio e Climatização',
      funcional: 1,
      nfuncional:6
    },
    {
      id:10,
      designation: 'Laboratórios de Instalações Eléctricas',
      funcional: 1,
      nfuncional:6
    },
    {
      id:11,
      designation: 'Laboratórios de M´quinas Eléctricas',
      funcional: 1,
      nfuncional:6
    },
    {
      id:12,
      designation: 'Laboratórios de Metalomecânica',
      funcional: 1,
      nfuncional:6
    },
    {
      id:13,
      designation: 'Laboratórios de Quimica',
      funcional: 1,
      nfuncional:6
    },
    {
      id:14,
      designation: 'Laboratórios de Telecomunicações',
      funcional: 1,
      nfuncional:6
    },
    {
      id:15,
      designation: 'Oficinas de Construções Mecânicas',
      funcional: 1,
      nfuncional:6
    },
    {
      id:16,
      designation: 'Oficinas de Máquinas e Motores',
      funcional: 1,
      nfuncional:6
    },
    {
      id:17,
      designation: 'Oficinas de Soldadura',
      funcional: 1,
      nfuncional:6
    },
  ]

  items: any = {id:'',designation:'',functional:'', nfunctional:''}

  ngOnInit() {
  }


  isNegative(value: number): boolean {
    return value < 0;
  }
}
