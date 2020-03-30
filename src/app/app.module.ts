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
import { ExpertiseComponent } from './expertise/expertise.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesHeroComponent,
    ServicesComponent,
    ServicesContentComponent,
    FooterComponent,
    CaseStudiesComponent,
    ExpertiseComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
