'use client';

import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';

// PDF.js worker setup
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

}


export default function Magazine() {
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
  <Document
  file="/magazine/Magazine.pdf"
  onLoadSuccess={onLoadSuccess}
>
  {Array.from(new Array(numPages), (el, index) => (
    <Page key={index} pageNumber={index + 1} />
  ))}
</Document>
    </div>
  );
}
