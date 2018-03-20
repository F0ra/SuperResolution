import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { SourceCodeComponent } from './source-code/source-code.component';
import { ExamplesComponent } from './examples/examples.component';
import { SampleDillerService } from './sample-diller.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    AlgorithmComponent,
    SourceCodeComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SampleDillerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
