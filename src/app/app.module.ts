import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';

import { FooterComponent } from './footer/footer.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { AboutComponent } from './about/about.component';
import { ServicesAllComponent } from './services/services-all/services-all.component';
import { ServicesMobileComponent } from './services/services-mobile/services-mobile.component';
import { ServicesArComponent } from './services/services-ar/services-ar.component';
import { ServicesWebComponent } from './services/services-web/services-web.component';
import { ServicesDesignComponent } from './services/services-design/services-design.component';
import { ServicesDevComponent } from './services/services-dev/services-dev.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    CaseStudiesComponent,
    ExpertiseComponent,
    AboutComponent,
    ServicesAllComponent,
    ServicesMobileComponent,
    ServicesArComponent,
    ServicesWebComponent,
    ServicesDesignComponent,
    ServicesDevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
