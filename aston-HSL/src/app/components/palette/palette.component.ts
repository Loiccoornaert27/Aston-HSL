import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  h: number = 100;

  s: number = 20;

  l: number = 60;

  firstBack: string = `background-colour : hsl( ${this.h}, ${this.s}%, ${this.l}%)`;
  secondBack: string = `background-colour : hsl( ${this.h + 30}, ${this.s}%, ${this.l}%)`;
  thirdBack: string = `background-colour : hsl( ${this.h + 180}, ${this.s}%, ${this.l}%)`;


  constructor() { }

  ngOnInit(): void {
  }

  colorChange(): void {
    this.firstBack = `background-colour : hsl( ${this.h}, ${this.s}%, ${this.l}%)`;
    this.secondBack = `background-colour : hsl( ${this.h + 30}, ${this.s}%, ${this.l}%)`;
    this.thirdBack = `background-colour : hsl( ${this.h + 180}, ${this.s}%, ${this.l}%)`;

  }



}
