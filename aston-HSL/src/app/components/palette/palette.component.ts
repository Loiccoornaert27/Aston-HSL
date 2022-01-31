import { RecursiveAstVisitor } from '@angular/compiler/src/output/output_ast';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  @HostBinding ("style.--main-hue")
  hue !: number;

  @HostBinding ("style.--main-sat")
  sat !: number;

  @HostBinding ("style.--main-light")
  light !: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeHue(hue:number):void{
     this.hue=hue;
  }

  changeSat(sat:number):void{
    this.sat=sat;
  }

  changeLight(light:number):void{
    this.light=light;
  }


}
