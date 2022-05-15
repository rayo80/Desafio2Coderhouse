import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  alumnos: any = [
    {
      name: 'Pepito',
      payment: 500,
      debt: 1000,
      created: "2022-07-02"
    },
    {
      name: 'Carlos',
      payment: 600,
      debt: 100,
      created: "2020-04-01"
    },
    {
      name: 'Juan',
      payment: 1500,
      debt: 200,
      created: "2021-08-03"
    },
    {
      name: 'Richard',
      payment: 300,
      debt: 800,
      created: "2022-04-07"
    },
    {
      name: 'Eduardo',
      payment: 200,
      debt: 850,
      created: "2019-04-05"
    },
    {
      name: 'Erick Elera',
      payment: 500,
      debt: 100,
      created: "2022-04-07"
    }
  ];
  

  mostrar(i:number){
    alert('Usted hizo click en el boton de la fila '+ i)
  }

  pintado = new Array<boolean>(this.alumnos.length).fill(false);

  pintar(i:number){
    this.pintado[i]=!this.pintado[i]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
