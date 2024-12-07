import "react";
import { Outlet, createRootRoute, redirect } from "@tanstack/react-router";
import { useAuth } from "../provider/authProvider";
import { AuthPage } from "../pages/AuthPage/AuthPage";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { cookies } = useAuth();

  return (
    <div className='h-full'>{cookies?.token ? <Outlet /> : <AuthPage />}</div>
  );
}
