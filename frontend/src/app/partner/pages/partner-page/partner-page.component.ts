import { Component, OnInit } from '@angular/core';
import { PartnerAd } from '../../types/partner-ad';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.scss'],
})
export class PartnerPageComponent implements OnInit {
  partnerName: string = 'Bolo ao Forno & Cia';
  ads: PartnerAd[] = [];

  constructor() {
    this.ads = [
      {
        id: '1',
        partnerId: 'p1',
        partnerName: 'Bolo ao Forno & Cia',
        type: 'text',
        adText: '10% de desconto para associados! Venha conhecer nossos bolos artesanais.',
        description: 'Promoção de desconto para associados',
        isActive: true,
        contactPhone: '(92) 3564-0547',
        contactEmail: 'contato@boloaoforno.com.br',
        createdAt: '2024-01-15',
      },
      {
        id: '2',
        partnerId: 'p1',
        partnerName: 'Bolo ao Forno & Cia',
        type: 'image',
        imageUrl: 'https://via.placeholder.com/300x200',
        description: 'Banner promocional de Natal',
        isActive: false,
        contactPhone: '(92) 3564-0547',
        contactEmail: 'contato@boloaoforno.com.br',
        createdAt: '2024-12-01',
      },
    ];
  }

  ngOnInit(): void {}

  toggleAdStatus(ad: PartnerAd): void {
    ad.isActive = !ad.isActive;
  }

  deleteAd(ad: PartnerAd): void {
    this.ads = this.ads.filter((a) => a.id !== ad.id);
  }
}
