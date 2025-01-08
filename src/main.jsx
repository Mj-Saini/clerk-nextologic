import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider
        publishableKey={"pk_test_Z3Jvd24tcGlnLTM0LmNsZXJrLmFjY291bnRzLmRldiQ"}
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
