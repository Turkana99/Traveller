import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { MemoriesComponent } from './memories/memories.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { QuestionsComponent } from './questions/questions.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    AboutComponent,
    ServicesComponent,
    DestinationsComponent,
    MemoriesComponent,
    TestimonialsComponent,
    QuestionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
