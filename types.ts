export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingFeature {
  text: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
