import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ListeComponent } from './liste/liste.component';
import { AuthGuard } from './auth.service';

const routes: Routes = [
  { path : 'accueil', component: AccueilComponent },
  { path : 'apropos', component: AproposComponent, canActivate: [AuthGuard]},
  { path: 'movie', component: ListeComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
