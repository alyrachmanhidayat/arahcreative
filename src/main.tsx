import { createRoot } from "react-dom/client";
import { useState } from "react";
import App from "./App.tsx";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";

const MainApp = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  if (!loadingComplete) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return <App />;
};

createRoot(document.getElementById("root")!).render(<MainApp />);
