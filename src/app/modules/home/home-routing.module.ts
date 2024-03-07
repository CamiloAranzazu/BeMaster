import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './home.component';

const defaultRedirect = '/home/category';

const routes: Routes = [
  { path: '', redirectTo: defaultRedirect, pathMatch: 'full' },
  { path: '', component: HomeComponent,
      children: [
        { path: 'category', component: CategoryComponent }
      ] 
  },
  { path: '**', redirectTo: defaultRedirect, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
