import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeScreen } from "../components/dashboard/HomeScreen";
import { ErrorScreen } from "../components/errors/ErrorScreen";
import { PokemonScreen } from "../components/pokemons/PokemonScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/pokemon/:id" element={<PokemonScreen />}></Route>
          <Route path="*" element={<ErrorScreen />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
