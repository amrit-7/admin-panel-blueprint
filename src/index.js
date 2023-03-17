import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { UserProvider } from "./context/user.context";
import { CustomerProvider } from "./context/customers.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProSidebarProvider>
        <UserProvider>
          <CustomerProvider>
            <App />
          </CustomerProvider>
        </UserProvider>
      </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
