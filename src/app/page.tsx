'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ArtGallery from '@/components/sections/ArtGallery';
import ComversoPreview from '@/components/sections/ComversoPreview';
import { SpotifySection } from '@/components/sections/SpotifySection';
import InstagramFeed from '@/components/sections/InstagramFeed';
import CallToAction from '@/components/sections/CallToAction';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <About />
      <ArtGallery />
      <ComversoPreview />
      <SpotifySection />
      <InstagramFeed />
      <CallToAction />
    </>
  );
}
