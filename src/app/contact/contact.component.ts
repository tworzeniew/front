import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  sendMessage(): void {
    console.log('Wiadomość została wysłana');
  }
}
