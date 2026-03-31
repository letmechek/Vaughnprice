import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FooterPageTemplate } from '../../components/FooterPageTemplate';
import { systemLayerPages } from '../../lib/footerLinks';

type SystemLayerPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return systemLayerPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SystemLayerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = systemLayerPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.summary,
  };
}

export default async function SystemLayerPage({ params }: SystemLayerPageProps) {
  const { slug } = await params;
  const page = systemLayerPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return <FooterPageTemplate page={page} />;
}
