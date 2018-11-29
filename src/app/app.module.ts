import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import  {SendService } from './send.service';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule, MatFormFieldModule} from '@angular/material';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { MenuComponent } from './menu/menu.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import {  MatSidenavModule, MatListModule } from '@angular/material';
import { NewsApiService } from './news-api.service';
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { CountryAddComponent } from './country-add/country-add.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { QueryComponent } from './query/query.component';


// Puts components as different pages so they can be accessed through RouterLink
const appRoutes: Routes = [
  {
    path: 'list',
    component: CountryListComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'query',
    component: QueryComponent
  },
  {
    path: 'create',
    component: CountryAddComponent
  },
  {
    path: 'edit/:id',
    component: CountryEditComponent
  }
  
];
// Imports all components to be used across different pages.
  @NgModule({
    declarations: [
      AppComponent,
      MenuComponent,
      CountryListComponent,
      CountryAddComponent,
      CountryEditComponent,
      QueryComponent,
    ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    SharedModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    NgProgressRouterModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule,
  ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [SendService],
  bootstrap: [AppComponent]
})
export class AppModule { }