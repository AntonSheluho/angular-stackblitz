import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FavoriteColorComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [FavoriteColorComponent],
  bootstrap: [FavoriteColorComponent],
})
export class AppModule {}
