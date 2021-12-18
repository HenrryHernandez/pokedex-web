import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeScreen } from "../screens/dashboard/HomeScreen";
import { ErrorScreen } from "../screens/errors/ErrorScreen";
import { PokemonScreen } from "../screens/pokemons/PokemonScreen";

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
