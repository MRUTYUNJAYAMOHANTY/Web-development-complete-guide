import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private eleRef:ElementRef,private renderer: Renderer2) {
     
   }
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue',false,false)
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue')
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent')
    this.backgroundColor = this.defaultColor
  }
}
