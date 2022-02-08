import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[getapiAngularDoneDone]'
})
export class DoneDoneDirective {

  @Input() hightLighter = '';

  constructor(private el:ElementRef) {
  }
  private hightLight(color: string){
      this.el.nativeElement.style.backgroundColor = color
  }
  private hightLight2(){
    this.el.nativeElement.style.color = "red"
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.hightLight(this.hightLighter)
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hightLight('')
  }
}
