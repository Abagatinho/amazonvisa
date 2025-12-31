import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnerAd } from '../../types/partner-ad';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.scss'],
})
export class AdPageComponent implements OnInit {
  isEditMode = false;
  adId: string | null = null;

  adTypes = [
    { label: 'Texto', value: 'text' },
    { label: 'Imagem', value: 'image' },
  ];

  form = this.formBuilder.group({
    type: ['text', Validators.required],
    imageUrl: [null as string | null],
    adText: [null as string | null],
    description: [null as string | null, Validators.required],
    isActive: [true],
    contactPhone: [null as string | null, Validators.required],
    contactEmail: [null as string | null, [Validators.required, Validators.email]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adId = this.route.snapshot.paramMap.get('id');
    if (this.adId) {
      this.isEditMode = true;
      this.loadAd(this.adId);
    }
  }

  loadAd(id: string): void {
    const mockAd: PartnerAd = {
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
    };

    this.form.patchValue({
      type: mockAd.type,
      imageUrl: mockAd.imageUrl || null,
      adText: mockAd.adText || null,
      description: mockAd.description,
      isActive: mockAd.isActive,
      contactPhone: mockAd.contactPhone,
      contactEmail: mockAd.contactEmail,
    });
  }

  get selectedType(): string {
    return this.form.get('type')?.value || 'text';
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.router.navigate(['/partner']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/partner']);
  }
}
