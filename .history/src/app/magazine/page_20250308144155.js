'use client';

import React from "react"
import { Document } from "react-pdf";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


export default function Magazine() {
  return(
    <>
    <div>
      <Document file="/magazine/Magazine.pdf"/>
    </div>
    </>
  )
}