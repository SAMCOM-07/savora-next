
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { BlogExperience } from '../../components/BlogExperience';
import { PageMotion } from '../../components/PageMotion';
import { IMAGES } from '../lib/data';

// note that the blog page epresent the journal of the restaurant, which is why it is linked in the navbar as "Journal" but the page itself is called "BlogPage" to avoid confusion with the "Journal" component that is used for the blog posts themselves. 


export function BlogPage() {
  return <PageMotion><PageHero eyebrow="The Savora journal" title={<>Stories from the table.</>} description="Recipes, rituals, producer notes and the quiet obsessions that shape our kitchen." image={IMAGES.pasta} /><BlogExperience /></PageMotion>;
}