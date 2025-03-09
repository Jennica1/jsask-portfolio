"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { zoomPlugin } from "@react-pdf-viewer/zoom"; // Optional if you need more zoom control
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

export default function Magazine() {
  // Initialize the plugins
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [], // Hide the sidebar if not needed
  });

  const zoomPluginInstance = zoomPlugin(); // Optional, for additional zoom controls

  return (
    <div style={{ height: "20vh", width: "100%" }}>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
        <Viewer
          fileUrl="/magazine/Magazine.pdf"
          plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
          theme="light"
          renderMode="canvas"
          initialPage={0}
          zoom={1.0} // Adjust zoom to fit both pages (you can tweak this value)
        />
      </Worker>
    </div>
  );
}
