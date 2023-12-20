import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Lista Giocatori</h2>
    <ul>
      <li *ngFor="let giocatore of giocatori">
        {{ giocatore.nome }} - {{ giocatore.squadra }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  giocatori = [
    { nome: 'Cristiano Ronaldo', squadra: 'Manchester United' },
    { nome: 'Lionel Messi', squadra: 'Paris Saint-Germain' },
    { nome: 'Neymar Jr.', squadra: 'Paris Saint-Germain' },
    // Aggiungi altri giocatori secondo necessità
  ];
}