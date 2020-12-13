import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter')
  onmouseOver() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onmouseLeave() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', '#fff');
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor')
  get setColor() {
    return this.backgroundColor;
  }
  
  private backgroundColor: string;
  @Input()
  private defaultColor: string = 'white';
  @Input('highlight')
  private highlightColor: string = 'yellow';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {

   }

   ngOnInit() {
     this.backgroundColor = this.defaultColor;
   }

}
