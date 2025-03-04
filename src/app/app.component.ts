import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { BrowserPlatformLocation, CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ServerElementComponent,CockpitComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  serverElements = [{type:'server',name:'Testserver', content:'Just a test!'}];

  onServerAdded(serverData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    });
  }
}
