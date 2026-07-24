
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { ContactExperience } from '../../components/ContactExperience';
import { Newsletter } from '../../components/Newsletter';
import { PageMotion } from '../../components/PageMotion';
import { IMAGES } from '../lib/data';

export function ContactPage() {
  return <PageMotion><PageHero eyebrow="Contact & visit" title={<>We’d love to welcome you.</>} description="Whether you’re joining us for dinner, planning an occasion or simply curious, our door is always open." image={IMAGES.interior} /><ContactExperience /><Newsletter /></PageMotion>;
}