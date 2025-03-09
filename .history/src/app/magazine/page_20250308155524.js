"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Magazine() {
  // Initialize the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [], // Hide the sidebar if you don't need it
  });
  const twoPageLayout = (props) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {props.pages.map((page) => (
          <div key={page.key} style={{ flex: "0 0 50%" }}>
            {page.renderPage()}
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div style={{ height: "90vh" }}>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
        <Viewer
          fileUrl="/magazine/Magazine.pdf"
          plugins={[defaultLayoutPluginInstance]}
          theme="light"
          initialPage={0} // Start at the first page
          renderMode="canvas"
        />
      </Worker>
    </div>
  );
}
