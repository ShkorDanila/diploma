import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuth } from "./provider/authProvider";
import { QueryProvider } from "./provider/queryProvider";

const router = createRouter({ routeTree });

function AppRouterProvider() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <AppRouterProvider />
      </AuthProvider>
    </QueryProvider>
  </StrictMode>
);
