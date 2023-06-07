import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients: Client[] = [
    {
      name: 'Klient 1',
      description: 'Opis klienta 1.',
      imageUrl: 'link-do-zdjecia-1.jpg'
    },
    {
      name: 'Klient 2',
      description: 'Opis klienta 2.',
      imageUrl: 'link-do-zdjecia-2.jpg'
    },
    // Dodaj kolejnych klientów
  ];
}
interface Client {
  name: string;
  description: string;
  imageUrl: string;
}