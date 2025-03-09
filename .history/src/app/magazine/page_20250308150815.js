'use client';

import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';

// PDF.js worker setup
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = 'unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.mjs';
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
    
      </Document>
    </div>
  );
}
