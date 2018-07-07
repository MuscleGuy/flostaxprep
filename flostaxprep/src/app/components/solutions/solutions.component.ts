import { Component, OnInit } from '@angular/core';
import {ContactFormService} from '../../service/contact-form.service';
import {MobileMenuService} from '../../service/mobile-menu.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

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
