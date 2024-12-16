import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.tsx";
import { NuqsAdapter } from "nuqs/adapters/react";
import { QueryProvider } from "./providers/QueryProvider.tsx";
import { RootLayout } from "./shared/components/root-layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NuqsAdapter>
      <QueryProvider>
        <RootLayout>
          <App />
        </RootLayout>
      </QueryProvider>
    </NuqsAdapter>
  </StrictMode>
);
