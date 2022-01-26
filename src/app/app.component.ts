import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-template-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColor">
  `,
})
export class FavoriteColorComponent {
  favoriteColor = new FormControl('');
}
