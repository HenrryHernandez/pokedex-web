import { AppRouter } from "./routers/AppRouter";
import { SearchInputProvider } from "./contexts/SearchInputContext";

const AppState = ({ children }: any) => {
  return <SearchInputProvider>{children}</SearchInputProvider>;
};

export const App = () => {
  return (
    <AppState>
      <AppRouter />
    </AppState>
  );
};
