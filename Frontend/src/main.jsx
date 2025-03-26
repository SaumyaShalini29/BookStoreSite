import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./middleware/authMiddleware"; // ✅ Correct Import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ Wrap the app with AuthProvider */}
      <BrowserRouter>
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
