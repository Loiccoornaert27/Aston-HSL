import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  hue !: number;
  sat !: number;
  light !: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
