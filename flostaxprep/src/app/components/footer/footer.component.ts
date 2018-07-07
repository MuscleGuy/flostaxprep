import { Component, OnInit } from '@angular/core';
import {ContactFormService} from '../../service/contact-form.service';
import {MobileMenuService} from '../../service/mobile-menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private contactForm: ContactFormService, private menu: MobileMenuService) { }

  toggleMenu(){
    this.menu.showMobileMenu();
  }

  toggleMobileContactForm(){
    this.contactForm.showMobileContactForm();
  }

  ngOnInit() {
  }

}
