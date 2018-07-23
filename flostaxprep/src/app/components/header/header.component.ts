import { Component, OnInit} from '@angular/core';
import {MobileMenuService} from '../../service/mobile-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMenu: Boolean = false;
  constructor(private menu: MobileMenuService) { }

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
  scrollToContact(){
    this.showMenu = false;
    this.menu.scrollContact();
  }
 
  ngOnInit() {
    this.showMenu === true;
  }

}
 