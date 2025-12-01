'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import { ConsultorioSection } from '@/components/sections/ConsultorioSection';
import ArtGallery from '@/components/sections/ArtGallery';
import { VideoSection } from '@/components/sections/VideoSection';
import ComversoPreview from '@/components/sections/ComversoPreview';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { PressSection } from '@/components/sections/PressSection';
import { MonografiasSection } from '@/components/sections/MonografiasSection';
import InstagramFeed from '@/components/sections/InstagramFeed';
import CallToAction from '@/components/sections/CallToAction';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <About />
      <ConsultorioSection />
      <ArtGallery />
      <VideoSection />
      <ComversoPreview />
      <PodcastSection />
      <PressSection />
      <MonografiasSection />
      <InstagramFeed />
      <CallToAction />
    </>
  );
}
