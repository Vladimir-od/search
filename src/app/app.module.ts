import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ContainerDetailsComponent } from './container-details/container-details.component';


const routes: Routes = [
  {path: 'container/:id', component: ContainerDetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ContainerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
