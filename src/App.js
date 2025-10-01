import "./App.css";
import Home from "./pages/Home";
import { I18nProvider } from "./i18n";

function App() {
  return (
    <I18nProvider>
      <Home />
    </I18nProvider>
  );
}

export default App;
