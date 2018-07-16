import { Component, OnInit } from '@angular/core';
import {MobileMenuService} from '../../service/mobile-menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private menu: MobileMenuService) { }

  toggleMenu(){
    this.menu.showMobileMenu();
  }


  ngOnInit() {
  }

}
