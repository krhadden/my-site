import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
