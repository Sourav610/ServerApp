import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,ContentChild,DoCheck,ElementRef,Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  imports: [CommonModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, 
DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input('srvElement') element!: {type:string, name:string, content:string};
  @Input() name!:string;
  @ViewChild('heading') header!:ElementRef;
  @ContentChild('contentParagraph')paragraph!:ElementRef;
  constructor(){
    console.log('Constructor called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewinit called!');
    console.log('Text Content: '+ this.header.nativeElement.textContent)
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAftercontentChecked Called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called!');
    console.log('Text content of paragraph: '+this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log('ngOnDoCheck Called!')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit called!');
    console.log('Text Content: '+ this.header.nativeElement.textContent);
    console.log('Text content of paragraph: '+this.paragraph.nativeElement.textContent);
  }

}
