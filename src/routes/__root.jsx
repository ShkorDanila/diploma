import "react";
import { Outlet, createRootRoute, redirect } from "@tanstack/react-router";
import { useAuth } from "../provider/authProvider";
import { AuthPage } from "../pages/AuthPage";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { isAuthed } = useAuth();

  if (!isAuthed) {
    return <AuthPage />;
  }

  return <Outlet />;
}
