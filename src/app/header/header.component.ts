import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  ngOnInit(): void {

  }

   //userdefined event
   @Output() toggle=new EventEmitter();

   menuiconclicked(){
   this.toggle.emit()
   //emit() - Emits an event containing a given value
   }
}
