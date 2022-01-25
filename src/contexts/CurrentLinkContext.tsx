import { createContext, useReducer } from "react";
import { CurrentLinkState, currentListReducer } from "./currentLinkReducer";

type CurrentApiLinkContextProps = {
  apiLink: string;
  setLinkToGetAllPokemons: () => void;
  setNextLink: (apiLink: string) => void;
  resetToOriginalLink: () => void;
};

const initialCurrentApiLinkState: CurrentLinkState = {
  apiLink: "https://pokeapi.co/api/v2/pokemon?limit=20",
};

export const CurrentApiLinkContext = createContext(
  {} as CurrentApiLinkContextProps
);

export const CurrentApiLinkProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    currentListReducer,
    initialCurrentApiLinkState
  );

  const setLinkToGetAllPokemons = () => {
    dispatch({ type: "setLinkToGetAllPokemons" });
  };

  const setNextLink = (apiLink: string) => {
    dispatch({ type: "setNextLink", payload: apiLink });
  };

  const resetToOriginalLink = () => {
    dispatch({ type: "resetToOriginalLink" });
  };

  return (
    <CurrentApiLinkContext.Provider
      value={{
        ...state,
        setLinkToGetAllPokemons,
        setNextLink,
        resetToOriginalLink,
      }}
    >
      {children}
    </CurrentApiLinkContext.Provider>
  );
};
