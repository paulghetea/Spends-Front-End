import { SpendsComponent } from './pages/spends/spends.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'spends', component: SpendsComponent},
  {path:'', redirectTo: '/home', pathMatch:"full"},
  {path:'**', redirectTo: '/home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }