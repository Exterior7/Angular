import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
 { 
  path:'',
  component: HomeComponent,
},
{
  path: 'products',
  component: ProductComponent,
},
{
  path: '**',
  redirectTo: '',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
