import { Component, OnInit } from '@angular/core';
import {MobileMenuService} from '../../service/mobile-menu.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private menu: MobileMenuService) { }
  
  toggleMenu(){
    this.menu.showMobileMenu();
  }



  ngOnInit() {
  }

}
