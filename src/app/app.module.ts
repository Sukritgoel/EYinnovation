import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';

import { TruncateModule } from '@yellowspot/ng-truncate';
// import { slick } from 'angular-slick'

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {DragScrollModule } from 'ngx-drag-scroll';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon'; 
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
// import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BoxComponent } from './Modules/box/box.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { EmailAutomationComponent } from './email-automation/email-automation.component';
import { SslAssetComponent } from './ssl-asset/ssl-asset.component';
import { EmployeeHelpdeskComponent } from './employee-helpdesk/employee-helpdesk.component';
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './Pages/sample/sample.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    BoxComponent,
    AssetDetailsComponent,
    EmailAutomationComponent,
    SslAssetComponent,
    EmployeeHelpdeskComponent,
    LoginComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    TruncateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatVideoModule,
    MatInputModule,
    DragScrollModule,
    ScrollingModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
