import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertaComponent } from './pages/ofertas/oferta.component';
import { LoginComponent } from './pages/login/login.component';
import { NewOfertaComponent } from './pages/newoferta/newoferta.component';
import { ListaOfertaComponent } from './pages/listaoferta/listaoferta.component';
import { DetalleOfertaComponent } from './pages/listaoferta/detalleoferta/detalleoferta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ListaOfertaComponent
      },
      {
        path: 'ofertas',
        component: OfertaComponent
      },
      {
        path: 'detalleOferta/:id',
        component: DetalleOfertaComponent
      },
      {
        path: 'listaoferta',
        component: ListaOfertaComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'newOferta',
        component: NewOfertaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
