
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { FAQ } from '../../components/FAQ';
import { PageMotion } from '../../components/PageMotion';
import { IMAGES } from '../lib/data';

export function FAQPage() {
  return <PageMotion><PageHero eyebrow="Before you visit" title={<>A few helpful answers.</>} description="Everything you need to know before your evening with us — from reservations and dress code to dietary requirements." image={IMAGES.interior} /><FAQ /></PageMotion>;
}