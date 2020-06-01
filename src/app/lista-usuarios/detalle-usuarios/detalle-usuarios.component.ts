import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detalle-usuario',
  templateUrl: './detalle-usuarios.component.html',
  styleUrls: ['./detalle-usuarios.component.css']
})
export class DetalleUsuariosComponent implements OnInit {

  @Input() gender: string;
  @Input() cell: string;
  @Input() phone: string;
  @Input() email: string;

  constructor() { }

  ngOnInit() {
  }

}
