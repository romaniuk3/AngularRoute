import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryDetailComponent } from './factory-detail/factory-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { WorkersDetailComponent } from './workers-detail/workers-detail.component';
import { WorkersComponent } from './workers/workers.component';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: ''
  },
  { 
    path: 'factory', loadChildren: () => import('./factory/factory.module').then(m => m.FactoryModule)
  },
  { 
    path: 'delete-product', loadChildren: () => import('./delete-product/delete-product.module').then(m => m.DeleteProductModule) 
  },
  { 
    path: '**', component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  WorkersComponent, ProductsComponent, NotFoundComponent,
  FactoryDetailComponent, WorkersDetailComponent
]
