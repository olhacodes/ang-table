import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorInterceptor } from './http-interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
