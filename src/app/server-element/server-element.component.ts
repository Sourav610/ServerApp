import { CommonModule } from '@angular/common';
import { Component,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  imports: [CommonModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent {
  @Input('srvElement') element!: {type:string, name:string, content:string};

}
