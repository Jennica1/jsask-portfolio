"use client";

import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Magazine() {
  // Initialize the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [], // Hide the sidebar if not needed
  });

  // State for the current page
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 20; // Update this dynamically based on the PDF

  // Move to the next two pages
  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage + 2 < totalPages ? prevPage + 2 : prevPage
    );
  };

  // Move to the previous two pages
  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 2 >= 0 ? prevPage - 2 : 0));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Left Page */}
          <div style={{ width: "45%" }}>
            <Viewer
              fileUrl="/magazine/Magazine.pdf"
              plugins={[defaultLayoutPluginInstance]}
              initialPage={currentPage}
            />
          </div>

          {/* Right Page (Only render if there's a next page) */}
          {currentPage + 1 < totalPages && (
            <div style={{ width: "45%" }}>
              <Viewer
                fileUrl="/magazine/Magazine.pdf"
                plugins={[defaultLayoutPluginInstance]}
                initialPage={currentPage + 1}
              />
            </div>
          )}
        </div>
      </Worker>

      {/* Navigation Controls */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage + 1} & {currentPage + 2}
        </span>
        <button onClick={nextPage} disabled={currentPage + 2 >= totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
