import { AppRouter } from "./routers/AppRouter";

const AppState = ({ children }: any) => {
  return <>{children}</>;
};

export const App = () => {
  return (
    <AppState>
      <AppRouter />
    </AppState>
  );
};
