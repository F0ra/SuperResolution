import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { SourceCodeComponent } from './source-code/source-code.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Algorithm', component: AlgorithmComponent},
  {path: 'Code', component: SourceCodeComponent},
  {path: 'Examples', component: ExamplesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
