import { Component, OnInit } from '@angular/core';
import {MobileMenuService} from '../../service/mobile-menu.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  constructor(private menu: MobileMenuService) { }

  toggleMenu(){
    this.menu.showMobileMenu();
  }
  
  ngOnInit() {
  }

}
