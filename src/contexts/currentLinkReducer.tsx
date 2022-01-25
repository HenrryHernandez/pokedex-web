export interface CurrentLinkState {
  apiLink: string;
}

type CurrentLinkAction =
  | {
      type: "setLinkToGetAllPokemons";
    }
  | { type: "setNextLink"; payload: string }
  | { type: "resetToOriginalLink" };

export const currentListReducer = (
  state: CurrentLinkState,
  action: CurrentLinkAction
) => {
  switch (action.type) {
    case "setLinkToGetAllPokemons":
      return {
        ...state,
        apiLink: "https://pokeapi.co/api/v2/pokemon?limit=1200",
      };
    case "setNextLink":
      return {
        ...state,
        apiLink: action.payload,
      };
    case "resetToOriginalLink":
      return {
        ...state,
        apiLink: "https://pokeapi.co/api/v2/pokemon?limit=20",
      };

    default:
      return state;
  }
};
