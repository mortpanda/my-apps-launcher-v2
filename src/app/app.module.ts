import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ImageModule } from 'primeng/image';
import { DockModule } from 'primeng/dock';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { StartComponent } from './start/start.component';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { SubNavbarComponent } from './shared/sub-navbar/sub-navbar.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { PanelModule } from 'primeng/panel';
import { AdminWebsitesComponent } from './admin-websites/admin-websites.component';
import { UserWebsitesComponent } from './user-websites/user-websites.component';
import { OktaWebsitesComponent } from './okta-websites/okta-websites.component';
import { KlabSitesComponent } from './klab-sites/klab-sites.component';
import { DevinfoWebsitesComponent } from './devinfo-websites/devinfo-websites.component';
import { WorldTimeComponent } from './world-time/world-time.component';
import {FieldsetModule} from 'primeng/fieldset';
import { DatePipe } from '@angular/common';
import { MyProjectAppsComponent } from './my-project-apps/my-project-apps.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    StartComponent,
    SubNavbarComponent,
    AdminWebsitesComponent,
    UserWebsitesComponent,
    OktaWebsitesComponent,
    KlabSitesComponent,
    DevinfoWebsitesComponent,
    WorldTimeComponent,
    MyProjectAppsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    BrowserAnimationsModule,
    MenubarModule,
    ToolbarModule,
    SplitButtonModule,
    ImageModule,
    DockModule,
    FlexLayoutModule,
    InputTextModule,
    TooltipModule,
    TabViewModule,
    CardModule,
    SpeedDialModule,
    PanelModule,
    FieldsetModule,
    ProgressSpinnerModule,
    
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
