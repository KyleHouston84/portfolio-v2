import { Component, ViewEncapsulation, ElementRef, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { ModalService } from './modal.service';

@Component({ 
    selector: 'kh-modal', 
    template: `
      <div class="kh-modal">
        <div class="kh-modal-body">
            <div class="kh-modal-close" (click)="close()">
              <fa-icon [icon]="faXmark" size="lg" ></fa-icon>
            </div>
              <ng-content></ng-content>
          </div>
      </div>
      <div class="kh-modal-background"></div>
    `, 
    styleUrls: ['modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string = '';
  @Output() public onClose = new EventEmitter<boolean>();

  private element: any;
  public faXmark: any = faXmark;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'kh-modal') this.close();
    });

    // close modal on esc key
    window.addEventListener('keydown', (e: any) => {
      if (e.key === 'Escape') this.close();
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
    this.onClose.emit(true);
  }
}