import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { EducationComponent } from './component/education/education.component';
import { CertificationsComponent } from './component/certifications/certifications.component';
import { ContactMeComponent } from './component/contact-me/contact-me.component';
import { ContributionsComponent } from './component/contributions/contributions.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { ProjectsComponent } from './component/projects/projects.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contributions', component: ContributionsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contactMe', component: ContactMeComponent },
  { path: 'experience', component: ExperienceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
