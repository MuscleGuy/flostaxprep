import { Component, OnInit } from '@angular/core';
import {MobileMenuService} from '../../service/mobile-menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private menu: MobileMenuService) { }

  toggleMenu(){
    this.menu.showMobileMenu();
  }
  
  ngOnInit() {
  }

}
