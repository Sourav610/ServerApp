
import { Component, ElementRef, EventEmitter, NgModule, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cockpit',
  imports: [FormsModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName='';
  // newServerContent ='';
  @ViewChild('serverContentInput')serverContentInput!:ElementRef;
  // onAddServer(){
  //   this.serverCreated.emit({
  //     serverName:this.newServerName,
  //     serverContent:this.newServerContent
  //   });
  // }

  // onAddServer(nameInput:HTMLInputElement){
  //   this.serverCreated.emit({
  //     serverName:nameInput.value,
  //     serverContent:this.newServerContent
  //   });
  // }


  // onAddBluePrint(nameInput:HTMLInputElement){
  //   this.blueprintCreated.emit({
  //     serverName:nameInput.value,
  //     serverContent:this.newServerContent
  //   });
  // }
  
  //when using viewChild
  onAddServer(nameInput:HTMLInputElement){
    this.serverCreated.emit({
          serverName:nameInput.value,
          serverContent:this.serverContentInput.nativeElement.value
        });
  }

  onAddBluePrint(nameInput:HTMLInputElement){
    this.blueprintCreated.emit({
          serverName:nameInput.value,
          serverContent:this.serverContentInput.nativeElement.value
        });
  }
}
