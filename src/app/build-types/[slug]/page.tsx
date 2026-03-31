import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FooterPageTemplate } from '../../components/FooterPageTemplate';
import { buildTypePages } from '../../lib/footerLinks';

type BuildTypePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return buildTypePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: BuildTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = buildTypePages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.summary,
  };
}

export default async function BuildTypePage({ params }: BuildTypePageProps) {
  const { slug } = await params;
  const page = buildTypePages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return <FooterPageTemplate page={page} />;
}
