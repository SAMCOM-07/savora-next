
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { BookingExperience } from '../../components/BookingExperience';
import { PageMotion } from '../../components/PageMotion';
import { IMAGES } from '../lib/data';

export function ReservationsPage() {
  return <PageMotion><PageHero eyebrow="Reservations" title={<>Your table is waiting.</>} description="Choose your preferred date and let us take care of the details. For parties of nine or more, our guest relations team would love to assist." image={IMAGES.event} /><BookingExperience /></PageMotion>;
}