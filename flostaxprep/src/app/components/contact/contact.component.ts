import { Component, OnInit } from '@angular/core';
import {ContactFormService} from '../../service/contact-form.service';
import {MobileMenuService} from '../../service/mobile-menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactForm: ContactFormService, private menu: MobileMenuService) { }

  toggleMenu(){
    this.menu.showMobileMenu();
  }

  toggleContactForm(){
    this.contactForm.showContactForm();
  }
  
  ngOnInit() {
  }

}
