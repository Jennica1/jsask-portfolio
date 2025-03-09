'use client';

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { pdfjs } from "react-pdf";

// Dynamically import react-pdf components
const Document = dynamic(() => import("react-pdf").then((mod) => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), { ssr: false });

// PDF.js worker setup (Ensure worker is in public folder)
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
}

export default function Magazine() {
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file="/magazine/Magazine.pdf" onLoadSuccess={onLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={index} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
