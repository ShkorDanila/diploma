import { AuthProvider } from "./authProvider";
import { QueryProvider } from "./queryProvider";
import { AppRouterProvider } from "./routerProvider";

export const Provider = () => {
  return (
    <QueryProvider>
      <AppRouterProvider />
    </QueryProvider>
  );
};
