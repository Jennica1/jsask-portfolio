"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { zoomPlugin } from "@react-pdf-viewer/zoom"; // Optional if you need more zoom control
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import Header from '../components/Header/Header';

export default function Magazine() {
  // Initialize the plugins
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [], // Hide the sidebar if not needed
  });

  const zoomPluginInstance = zoomPlugin(); // Optional, for additional zoom controls

  return (
 <>
 <div>
  <main>
    <Header/>
  </main>
 </div>
 </>
  );
}
