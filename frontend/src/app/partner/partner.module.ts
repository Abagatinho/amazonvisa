import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerFacade } from './partner.facade';
import { partnerState } from './state/partner.state';
import { partnerInitializerProvider } from './partner.initializer';
import { PartnerRoutingModule } from './partner-routing.module';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { PartnerPageComponent } from './pages/partner-page/partner-page.component';
import { AdPageComponent } from './pages/ad-page/ad-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  providers: [
    partnerState,
    PartnerFacade,
    partnerInitializerProvider
  ],
  declarations: [
    InfoPageComponent,
    PartnerPageComponent,
    AdPageComponent
  ],
  imports: [
    PartnerRoutingModule,
    SharedModule,
    CommonModule,
  ]
})
export class PartnerModule { }
