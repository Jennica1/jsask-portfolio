'use client';

import React from "react"
import { Document } from "reacr-pdf";

export default function Magazine() {
  return(
    <>
    <div>
      <Document file="./magazine/Magazine.pdf"/>
    </div>
    </>
  )
}