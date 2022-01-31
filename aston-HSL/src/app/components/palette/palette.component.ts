import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  h: number=100;

  s: number =20;

  l: number=60;

  main : string = `background-colour : hsl( ${this.h}, ${this.s}%, ${this.l}%)`;
  analog : string = `background-colour : hsl( ${this.h+30}, ${this.s}%, ${this.l}%)`;
  comp : string = `background-colour : hsl( ${this.h+180}, ${this.s}%, ${this.l}%)`;

  
  constructor() { }

  ngOnInit(): void {
  }

  colorChange():void{
    this.main= `background-colour : hsl( ${this.h}, ${this.s}%, ${this.l}%)`;
    this.analog= `background-colour : hsl( ${this.h+30}, ${this.s}%, ${this.l}%)`;
    this.comp = `background-colour : hsl( ${this.h+180}, ${this.s}%, ${this.l}%)`;

  }



}
