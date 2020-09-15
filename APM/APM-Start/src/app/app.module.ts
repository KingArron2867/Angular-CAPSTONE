import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponentComponent } from './character/welcome-component.component';
import { ProductModule } from './character/product.module';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about/about-us/about-us.component';


@NgModule({
  declarations: [ 
    AppComponent,
    WelcomeComponentComponent,
    ContactComponent,
    NavbarComponent,
    AboutUsComponent
  ], 
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponentComponent},
      { path: 'about', component: AboutUsComponent },
      {path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
