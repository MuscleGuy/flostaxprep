import { Injectable ,Inject, ViewChild, ElementRef} from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {

  @ViewChild('container')
  private container: ElementRef;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  showMobileMenu(){

  }

  public scrollToTop(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#main');
    this.pageScrollService.start(pageScrollInstance);
  };

  public scrollHome(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#main');
    this.pageScrollService.start(pageScrollInstance);
  };

  public scrollSolutions(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#solutions-section');
    this.pageScrollService.start(pageScrollInstance);
  };

  public scrollAbout(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#about-section');
    this.pageScrollService.start(pageScrollInstance);
  };

}
