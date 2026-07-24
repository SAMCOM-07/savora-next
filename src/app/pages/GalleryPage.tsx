
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { GalleryExperience } from '../../components/GalleryExperience';
import { PageMotion } from '../../components/PageMotion';
import { IMAGES } from '../lib/data';

export function GalleryPage() {
  return <PageMotion><PageHero eyebrow="The Savora lens" title={<>Every detail tells a story.</>} description="From the first spark in the kitchen to the last candle at the table — explore the atmosphere and artistry of Savora." image={IMAGES.diningRoom} /><GalleryExperience /></PageMotion>;
}