import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { ContentComponent } from './content/content.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    ItemsComponent,
    ContentComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
