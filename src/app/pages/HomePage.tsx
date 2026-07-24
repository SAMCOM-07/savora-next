import { Hero } from '@/components/Hero';
import { FeaturedDishes } from '@/components/FeaturedDishes';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import { PageMotion } from '@/components/PageMotion';
import { HomeSupplement } from '@/components/HomeSupplement';

export function HomePage() {
  return (
    <PageMotion>
      <Hero />
      <FeaturedDishes />
      <HomeSupplement />
      <Testimonials />
      <Newsletter />
    </PageMotion>
  );
}