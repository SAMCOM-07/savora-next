
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { AboutExperience } from '../../components/AboutExperience';
import { PageMotion } from '../../components/PageMotion';
import { IMAGES } from '../lib/data';

export function AboutPage() {
  return <PageMotion><PageHero eyebrow="Our story" title={<>Rooted in craft. Alive with possibility.</>} description="Savora is a study in quiet luxury, built around one enduring belief: the finest meals feel both extraordinary and deeply personal." image={IMAGES.diningRoom} /><AboutExperience /></PageMotion>;
}