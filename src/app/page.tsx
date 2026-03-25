import { Cursor } from './components/Cursor';
import { FeaturedWork } from './components/FeaturedWork';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { TechnologyStack } from './components/TechnologyStack';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vaughn Price Limited',
  url: 'https://vaughnprice.com',
  logo: 'https://vaughnprice.com/brand-mark.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@vaughnprice.com',
    areaServed: 'Global',
    availableLanguage: ['English'],
  },
  description:
    'Vaughn Price builds websites, mobile apps, enterprise systems, cloud platforms, data products, and AI-enabled software for ambitious businesses.',
  knowsAbout: [
    'Website development',
    'Mobile app development',
    'Enterprise systems',
    'Platform engineering',
    'Cloud infrastructure',
    'Data platforms',
    'AI products',
  ],
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Stats />
        <FeaturedWork />
        <Process />
        <TechnologyStack />
        <FinalCTA />
        <Footer />
      </main>
      <Cursor />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
