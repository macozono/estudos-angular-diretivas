import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter')
  onmouseOver() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onmouseLeave() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', '#fff');
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor')
  get setColor() {
    return this.backgroundColor;
  }
  
  private backgroundColor: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {

   }

}
