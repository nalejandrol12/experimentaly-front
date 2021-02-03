import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './clothes-store/components/search-bar/search-bar.component';
import { NavBarComponent } from './clothes-store/components/nav-bar/nav-bar.component';
import { FeaturedComponent } from './clothes-store/components/featured/featured.component';
import { FooterComponent } from './clothes-store/components/footer/footer.component';
import { CarouselComponent } from './clothes-store/components/carousel/carousel.component';
import { HomeComponent } from './clothes-store/pages/home/home.component';
import { MagazineComponent } from './clothes-store/components/magazine/magazine.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavBarComponent,
    FeaturedComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    MagazineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
