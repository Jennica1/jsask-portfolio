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

  // Custom layout function to display two pages side by side
  const twoPageLayout = (props) => {
    const pages = props.pages;
    const pairs = [];

    // Group pages into pairs
    for (let i = 0; i < pages.length; i += 2) {
      pairs.push(pages.slice(i, i + 2));
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {pairs.map((pair, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
            }}
          >
            {pair.map((page) => (
              <div key={page.key} style={{ flex: "0 0 50%" }}>
                {page.renderPage()}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
        <Viewer
          fileUrl="/magazine/Magazine.pdf"
          plugins={[defaultLayoutPluginInstance]}
          theme="light"
          renderMode="canvas"
          pageLayout={twoPageLayout}
        />
      </Worker>
    </div>
  );
}
