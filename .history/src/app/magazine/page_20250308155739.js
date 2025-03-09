"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { pageModePlugin } from "@react-pdf-viewer/page-mode";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Magazine() {
  // Default layout plugin (hides sidebar)
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  // Page mode plugin (to enable two-page spread)
  const pageModePluginInstance = pageModePlugin();

  return (
    <div style={{ height: "90vh" }}>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
        <Viewer
          fileUrl="/magazine/Magazine.pdf"
          plugins={[defaultLayoutPluginInstance, pageModePluginInstance]}
          theme="light"
          renderMode="canvas"
          defaultScale={1.5} // Adjust zoom if needed
        />
      </Worker>
    </div>
  );
}
