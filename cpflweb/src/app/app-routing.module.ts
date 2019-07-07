import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperadorListComponent } from './operador-list/operador-list.component';
import { FormOperadorComponent } from './form-operador/form-operador.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'operador', pathMatch: 'full' },
  { path: 'operadores', component: OperadorListComponent },
  { path: 'add', component: FormOperadorComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
