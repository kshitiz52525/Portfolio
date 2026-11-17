export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

/**
 * Real quotes only. The homepage hides the section while this is empty.
 * Ask: a brand contact (Infinix, Jio Games, STAN, MSI), a DnC co-founder,
 * and a manager at Ctruh or Zordie.
 */
export const testimonials: Testimonial[] = [];
