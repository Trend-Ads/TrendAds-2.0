"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import FloatingContactButtons from "@/components/floating/FloatingContactButtons";
import DocumentCard from "@/components/documents/DocumentCard";
import InstagramDownloadModal from "@/components/documents/InstagramDownloadModal";
import { DOCUMENTS_DATA, DocumentItem, INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/data/documents";

export default function DocumentsPage() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenDownload = (doc: DocumentItem) => {
    setSelectedDoc(doc);
    setModalOpen(true);
  };

  const currentDoc = DOCUMENTS_DATA[0];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#212121] flex flex-col justify-between">
      {/* Global Navigation */}
      <Navbar />

      {/* Hero Header Area */}
      <section className="relative pt-36 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-[#010736] via-[#081559] to-[#010736] text-white overflow-hidden">
        {/* Glow ambient background elements */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1B2CC1]/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#0D7377]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center sm:text-left">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-white/60 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#14FFEC] font-semibold">Instagram Documents Vault</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* Instagram Official Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 shadow-inner">
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={16}
                  height={16}
                  className="w-4 h-4 rounded-full object-cover bg-white p-0.5"
                />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Featured On Instagram @{INSTAGRAM_HANDLE}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]">
                Free Digital Growth & <br className="hidden sm:inline" />
                <span className="text-[#14FFEC]">Web Auditing Playbooks</span>
              </h1>

              <p className="mt-5 text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
                Download the exact technical frameworks, conversion checklists, and performance blueprints we share with our Instagram community. Follow our page to instantly unlock the full PDF guide.
              </p>
            </div>

            {/* Quick Instagram Profile Pill Card */}
            <div className="shrink-0 bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-3xl max-w-sm mx-auto lg:mx-0 w-full sm:w-auto text-left shadow-lg">
              <div className="flex items-center gap-3.5 mb-3">
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover bg-white p-0.5 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-black text-white">@{INSTAGRAM_HANDLE}</h4>
                  <p className="text-[11px] text-white/70">Official Instagram Channel</p>
                </div>
              </div>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Fresh breakdowns of web speed, ads scaling & design every week.
              </p>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity"
              >
                <span>Follow On Instagram</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16 w-full flex-1">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#010736]">
              Featured Resource
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Available for free instant download via Instagram verification
            </p>
          </div>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#1B2CC1] border border-blue-200/60">
            1 Available Document
          </span>
        </div>

        {/* Featured Document Card */}
        {currentDoc && (
          <div className="max-w-xl">
            <DocumentCard
              document={currentDoc}
              onOpenDownload={handleOpenDownload}
            />
          </div>
        )}

        {/* Coming Soon Callout */}
        <div className="mt-12 rounded-3xl bg-white border border-dashed border-slate-300 p-8 sm:p-10 text-center max-w-xl">
          <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mx-auto mb-3">
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={22}
              height={22}
              className="w-5.5 h-5.5 rounded-full object-cover"
            />
          </div>
          <h3 className="text-base font-bold text-slate-800">
            More Playbooks Coming Soon!
          </h3>
          <p className="text-xs text-slate-500 mt-1.5 max-w-sm mx-auto">
            We regularly drop new templates, Meta ads frameworks, and conversion swipe files on Instagram. Follow <strong className="text-slate-700">@{INSTAGRAM_HANDLE}</strong> so you never miss a drop.
          </p>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
      <FloatingContactButtons />

      {/* Download Unlock Modal */}
      {selectedDoc && (
        <InstagramDownloadModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          documentItem={selectedDoc}
        />
      )}
    </main>
  );
}
