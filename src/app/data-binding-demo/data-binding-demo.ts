import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-data-binding-demo',
  imports: [FormsModule, NgIf],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css',
})
export class DataBindingDemo {
  // Interpolation
  naslov: string = 'Dobrodošli u Data Binding Demo!';
  trenutnoVrijeme: string = new Date().toLocaleTimeString();

  // Property Binding
  slikaUrl: string = 'https://via.placeholder.com/300x200?text=Angular+Logo';
  isDisabled: boolean = false;
  inputPlaceholder: string = 'Unesite tekst ovdje...';

  // Event Binding
  poruka: string = '';
  brojKlikova: number = 0;

  klikniMe() {
    this.brojKlikova++;
    this.poruka = `Dugme je kliknuto ${this.brojKlikova} puta!`;
  }

  resetujBrojac() {
    this.brojKlikova = 0;
    this.poruka = 'Brojač je resetovan.';
  }

  // Two-Way Binding
  korisnickoIme: string = '';
  email: string = '';
  komentar: string = '';

  // Property Binding sa funkcijom
  toggleDisable() {
    this.isDisabled = !this.isDisabled;
  }

  azurirajVrijeme() {
    this.trenutnoVrijeme = new Date().toLocaleTimeString();
  }
}
