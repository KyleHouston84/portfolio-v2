import { Directive, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
  @Input() public spiedTags:string[] = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string = '';

  constructor(private _el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let currentSection: string = '';
    const children = this._el.nativeElement.children;
    const scrollTop = event.target.scrollTop;
    const windowOffset = window.innerHeight/2;
    
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if ((element.offsetTop - windowOffset) <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }

}