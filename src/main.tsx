import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="overflow-hidden flex flex-col !h-screen bg-slate-100">
      <App />
    </div>
  </StrictMode>
);
