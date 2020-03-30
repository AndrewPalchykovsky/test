import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services/services.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'expertise', component: ExpertiseComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
