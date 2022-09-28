import { Component, EventEmitter,Input,Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-ui',
  templateUrl: './grid-ui.component.html'
 })
export class GridUiComponent implements OnInit {

  public imagePath:any

  constructor() { }
  public imageURL:any="https://localhost:44339/";
   //getting column names
   gridColumns:Array<any> = new Array<any>();

   //getting column data
   gridData:Array<any> = new Array<any>();

  ngOnInit(): void {
  }

 getImage(input:any){
    console.log(input)
      }

  @Input("grid-columns")
  set SetGridColumns(_gridColumn:Array<any>){
    this.gridColumns=_gridColumn;
  }
  @Input("grid-data")
  set SetGridData(_gridData:Array<any>){
    this.gridData=_gridData;
  }
  @Output("grid-selected")
  emitemitter:EventEmitter<any>=new EventEmitter<any>();

  @Output("grid-deleted")
  emitemitters:EventEmitter<any>=new EventEmitter<any>();

  selectedGrid(_selected:any){
    debugger;
    this.emitemitter.emit(_selected);
  }
  deleteGrid(_deleted:any)
  {
debugger;
this.emitemitters.emit(_deleted);
  }

}