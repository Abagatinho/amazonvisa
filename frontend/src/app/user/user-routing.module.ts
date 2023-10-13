import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'info', component: InfoPageComponent },
  { path: '', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
