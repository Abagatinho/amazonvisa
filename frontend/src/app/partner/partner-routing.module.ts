import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { PartnerPageComponent } from './pages/partner-page/partner-page.component';
import { AdPageComponent } from './pages/ad-page/ad-page.component';

const routes: Routes = [
  { path: 'info', component: InfoPageComponent },
  { path: 'ad', component: AdPageComponent },
  { path: 'ad/:id', component: AdPageComponent },
  { path: '', component: PartnerPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerRoutingModule {}
