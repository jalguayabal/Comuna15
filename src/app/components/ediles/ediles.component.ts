import { Component, OnInit } from '@angular/core';
import { EdilesService, Edil } from '../../services/ediles.service';


@Component({
  selector: 'app-ediles',
  templateUrl: './ediles.component.html',
  styles: []
})
export class EdilesComponent implements OnInit {

  ediles: Edil[] = []

  constructor( private _edilesService: EdilesService ) { 
      this.ediles = this._edilesService.getEdiles();
   }

  ngOnInit() {
  }

}
