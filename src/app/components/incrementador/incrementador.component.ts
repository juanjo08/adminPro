import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter <number> = new EventEmitter ();

  constructor() { }

  ngOnInit() {
  }

  asignarValor() {

    if (this.progreso > 100) {
        this.progreso = 100;
        this.cambioValor.emit(this.progreso);

    }

    if (this.progreso < 0) {
        this.progreso = 0;
        this.cambioValor.emit(this.progreso);
    }

    this.cambioValor.emit(this.progreso);

  }

  cambiarValor( valor: number) {

    if ( this.progreso === 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

// tslint:disable-next-line: one-line
// tslint:disable-next-line: whitespace
    if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);

  }

}
