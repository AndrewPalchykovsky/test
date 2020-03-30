import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesHeroComponent } from './services/services-hero/services-hero.component';
import { ServicesComponent } from './services/services.component';
import { ServicesContentComponent } from './services/services-content/services-content.component';
import { FooterComponent } from './footer/footer.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesHeroComponent,
    ServicesComponent,
    ServicesContentComponent,
    FooterComponent,
    CaseStudiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
