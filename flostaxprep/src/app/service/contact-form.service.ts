import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor() { }

  showContactForm(){
    console.log('Show Contact Form');
  }

  showMobileContactForm(){
    console.log('Show Mobile Contact Form');
  }

}
