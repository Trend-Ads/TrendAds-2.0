import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import FloatingContactButtons from "@/components/floating/FloatingContactButtons";
import DocumentDetailView from "@/components/documents/DocumentDetailView";
import { DOCUMENTS_DATA, getDocumentBySlug } from "@/data/documents";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DOCUMENTS_DATA.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocumentBySlug(slug);

  if (!doc) {
    return {
      title: "Document Not Found | Trend Ads",
    };
  }

  return {
    title: `${doc.title} | Free PDF Download | Trend Ads`,
    description: doc.tagline || doc.description,
    openGraph: {
      title: `${doc.title} - Trend Ads Free Resource`,
      description: doc.tagline,
      type: "article",
    },
  };
}

export default async function DocumentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocumentBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#212121] flex flex-col justify-between">
      <Navbar />
      <DocumentDetailView document={doc} />
      <Footer />
      <FloatingContactButtons />
    </main>
  );
}
