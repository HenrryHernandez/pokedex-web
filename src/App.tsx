import { PokemonProvider } from "./contexts/PokemonContext";
import { AppRouter } from "./routers/AppRouter";

const AppState = ({ children }: any) => {
  return <PokemonProvider>{children}</PokemonProvider>;
};

export const App = () => {
  return (
    <AppState>
      <AppRouter />;
    </AppState>
  );
};
