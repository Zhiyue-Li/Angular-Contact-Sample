import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HelloComponent, ListComponent, FormComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
