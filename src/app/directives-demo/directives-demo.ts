import { Component } from '@angular/core';
import {
  NgIf,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgClass,
  NgStyle,
} from '@angular/common';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-directives-demo',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle, Highlight],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css',
})
export class DirectivesDemo {
  // *ngIf primjer
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  // *ngFor primjer
  items = ['Prvi', 'Drugi', 'Treći', 'Četvrti', 'Peti'];

  // *ngSwitch primjer
  boja = 'crvena';

  promijeniBoju(novaBoja: string) {
    this.boja = novaBoja;
  }

  // ngClass primjer
  isCrveno = true;

  toggleBoju() {
    this.isCrveno = !this.isCrveno;
  }

  // ngStyle primjer
  fontSize = 16;
  stilBoja = 'black';

  promijeniStil() {
    this.fontSize = this.fontSize === 16 ? 24 : 16;
    this.stilBoja = this.stilBoja === 'black' ? 'green' : 'black';
  }
}
