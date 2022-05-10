import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StartComponent } from './start/start.component';
import { AdminWebsitesComponent } from './admin-websites/admin-websites.component';
import { UserWebsitesComponent } from './user-websites/user-websites.component';
import { OktaWebsitesComponent } from './okta-websites/okta-websites.component';
import { KlabSitesComponent } from './klab-sites/klab-sites.component';
import { DevinfoWebsitesComponent } from './devinfo-websites/devinfo-websites.component';
import { WorldTimeComponent } from './world-time/world-time.component';
import { MyProjectAppsComponent } from './my-project-apps/my-project-apps.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'start', component: StartComponent },
  { path: 'admin-dash', component: AdminWebsitesComponent },
  { path: 'user-dash', component: UserWebsitesComponent },
  { path: 'okta', component: OktaWebsitesComponent },
  { path: 'devinfo', component: DevinfoWebsitesComponent },
  { path: 'klab', component: KlabSitesComponent },
  { path: 'worldtime', component: WorldTimeComponent },
  { path: 'project-apps', component: MyProjectAppsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
