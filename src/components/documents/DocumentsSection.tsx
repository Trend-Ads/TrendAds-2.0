"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DOCUMENTS_DATA, DocumentItem, INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/data/documents";
import DocumentCard from "./DocumentCard";
import InstagramDownloadModal from "./InstagramDownloadModal";

export default function DocumentsSection() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDownload = (doc: DocumentItem) => {
    setSelectedDoc(doc);
    setModalOpen(true);
  };

  const handleCloseDownload = () => {
    setModalOpen(false);
  };

  return (
    <section
      id="documents"
      className="relative py-24 sm:py-32 bg-[#F8FAFC] border-t border-slate-200/60 overflow-hidden"
    >
      {/* Background Ambience Elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#1B2CC1]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#0D7377]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-4">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={16}
                height={16}
                className="w-4 h-4 rounded-full object-cover"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Instagram Document Vault
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#010736] tracking-tight uppercase leading-[1.08]">
              Free Playbooks & <br className="hidden sm:inline" />
              <span className="text-[#1B2CC1]">Technical Checklists</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every document is engineered directly from real agency client audits and promoted on our Instagram (
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B2CC1] font-semibold hover:underline"
              >
                @{INSTAGRAM_HANDLE}
              </a>
              ). Follow us to unlock the instant PDF download.
            </p>
          </div>

          {/* Quick Header CTA */}
          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/documents"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1B2CC1] text-[#010736] hover:text-[#1B2CC1] text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow-md group"
            >
              <span>Explore All Documents</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOCUMENTS_DATA.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onOpenDownload={handleOpenDownload}
            />
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 sm:mt-16 rounded-3xl bg-gradient-to-r from-[#010736] via-[#091763] to-[#1B2CC1] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-[11px] font-bold text-white tracking-wide">
              <span>Looking for a custom site audit?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Want Trend Ads to Audit Your Website Personally?
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              DM us <strong className="text-[#14FFEC]">"AUDIT"</strong> on Instagram or book a free discovery call to receive a 10-minute video diagnostic of your speed, conversion leaks, and tracking.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs uppercase tracking-wider text-center shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={16}
                height={16}
                className="w-4 h-4 rounded-full bg-white p-0.5 object-cover"
              />
              <span>DM on Instagram</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#010736] font-black text-xs uppercase tracking-wider text-center transition-colors"
            >
              Contact Agency
            </a>
          </div>
        </div>
      </div>

      {/* Instagram Unlock Modal */}
      {selectedDoc && (
        <InstagramDownloadModal
          isOpen={modalOpen}
          onClose={handleCloseDownload}
          documentItem={selectedDoc}
        />
      )}
    </section>
  );
}
