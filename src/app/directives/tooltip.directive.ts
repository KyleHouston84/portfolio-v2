import { Directive, Input, ElementRef, HostListener, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements AfterViewInit, OnDestroy  {

  @Input() public tooltip:string = '';
  container: HTMLElement | null = null;
  tooltipText: HTMLElement | null = null;
  visible: boolean = false;

  constructor(private _el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.show();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hide();
  }
  
  @HostListener('click') onClick() {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }

  }

  ngAfterViewInit() {
    this.container = document.createElement('div');
    this.container.className = 'tooltip';
    this.container.innerText = this.tooltip;
    document.body.appendChild(this.container);
  }

  ngOnDestroy(): void {
    this.container?.remove();
  }

  private show(): void {
    if (this.container) {
      const elPosition = this._el.nativeElement.getBoundingClientRect();
      this.container.style.top = `${elPosition.top - 5}px`;
      this.container.style.left = `${elPosition.left}px`;
      this.container.classList.add('show');
      this.visible = true;
    }
  }

  private hide(): void {
    if (this.container) {
      this.container.classList.remove('show');
      this.visible = false;
    }
  }

}
