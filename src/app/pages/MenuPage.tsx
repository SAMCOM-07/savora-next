
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { MenuExperience } from '../../components/MenuExperience';
import { PageMotion } from '../../components/PageMotion';
import { IMAGES } from '../lib/data';

export function MenuPage() {
  return <PageMotion><PageHero eyebrow="The Savora menu" title={<>A season on every plate.</>} description="Explore an evolving collection of expressive dishes, from morning atelier service to our full evening tasting experience." image={IMAGES.dish2} /><MenuExperience /></PageMotion>;
}