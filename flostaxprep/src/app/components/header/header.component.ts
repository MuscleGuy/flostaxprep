import { Component, OnInit} from '@angular/core';
import {ContactFormService} from '../../service/contact-form.service';
import {MobileMenuService} from '../../service/mobile-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMenu: Boolean = false;
  constructor(private contactForm: ContactFormService, private menu: MobileMenuService) { }

  toggleMenu(){
    if(this.showMenu === true){
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }

  scrollToHome(){
    this.showMenu = false;
    this.menu.scrollHome();
  }
  scrollToSolutions(){
    this.showMenu = false;
    this.menu.scrollSolutions();
  }
  scrollToAbout(){
    this.showMenu = false;
    this.menu.scrollAbout();
  }
  scrollToAppointment(){
    this.showMenu = false;
    this.contactForm.showContactForm();
  }

  // hideMenu(){
  //   this.showMenu = false;
  // }

  toggleContactForm(){
    this.contactForm.showContactForm();
  }
  ngOnInit() {
    this.showMenu === true;
  }

}
 