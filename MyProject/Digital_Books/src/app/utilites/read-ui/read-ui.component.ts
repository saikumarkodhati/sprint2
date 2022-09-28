import {  Component, EventEmitter,Input,Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-read-ui',
  templateUrl: './read-ui.component.html',
  styleUrls: ['./read-ui.component.css']
})
export class ReadUiComponent implements OnInit {

  public imagePath:any

  constructor() { }

  public imageURL:any="https://localhost:44339/";

  readColumns:Array<any> = new Array<any>();

  //getting column data
  readData:Array<any> = new Array<any>();


  ngOnInit(): void {
  }

  readImage(input:any){
    console.log(input)
      }

  @Input("read-columns")
  set SetreadColumns(_readColumn:Array<any>){
    this.readColumns=_readColumn;
  }
  @Input("read-data")
  set SetreadData(_readData:Array<any>){
    this.readData=_readData;
  }
  @Output("read-selected")
  emitemitter:EventEmitter<any>=new EventEmitter<any>();

  @Output("read-deleted")
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
