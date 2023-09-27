import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  result:string=""
  getAction(item:any){
this.result+=item

  }
equal(){
  this.result=eval(this.result).toFixed(3)
  
}
reset(){
  this.result=""
}
del(){
  this.result=this.result.split("").slice(0,-1).join("")

  
}
}
