export interface PartnerAd {
  id: string;
  partnerId: string;
  partnerName: string;
  type: 'image' | 'text';
  imageUrl?: string;
  adText?: string;
  description: string;
  isActive: boolean;
  contactPhone: string;
  contactEmail: string;
  createdAt: string;
}
