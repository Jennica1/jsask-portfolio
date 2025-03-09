'use client';

import React from "react"
import { Document } from "react-pdf";

export default function Magazine() {
  return(
    <>
    <div>
      <Document file="/magazine/Magazine.pdf"/>
    </div>
    </>
  )
}