'use client';

import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';

// PDF.js worker setup
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.10.38/es5/build/pdf.worker.min.js';
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
