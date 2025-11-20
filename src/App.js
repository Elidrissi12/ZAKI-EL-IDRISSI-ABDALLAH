import "./App.css";
import React, { Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
const Home = React.lazy(() => import("./pages/Home"));
import { I18nProvider } from "./i18n";

function App() {
  return (
    <I18nProvider>
      <ErrorBoundary>
        <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </I18nProvider>
  );
}

export default App;
