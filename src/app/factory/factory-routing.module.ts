import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryDetailComponent } from '../factory-detail/factory-detail.component';
import { ProductsComponent } from '../products/products.component';
import { WorkersDetailComponent } from '../workers-detail/workers-detail.component';
import { WorkersComponent } from '../workers/workers.component';
import { FactoryComponent } from './factory.component';

const routes: Routes = [
  { path: '', component: FactoryComponent },
  { path: ':id', component: FactoryDetailComponent,
    children: [
      { path: 'workers', component: WorkersComponent },
      { path: 'workers/:id', component: WorkersDetailComponent },
      { 
        path: 'products', component: ProductsComponent, 
        loadChildren: () => import('../delete-product/delete-product.module').then(m => m.DeleteProductModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryRoutingModule { }
