import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponent,
    ArticlesComponentComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
