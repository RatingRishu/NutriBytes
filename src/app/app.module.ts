import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HomeComponent } from './home/home.component';
import { DetailsPopupComponent } from './details-popup/details-popup.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    RecipesListComponent,
    HomeComponent,
    DetailsPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
