import React, { createContext, useState } from "react";

type SearchInputContextProps = {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInputContext = createContext({} as SearchInputContextProps);

export const SearchInputProvider = ({ children }: any) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchInputContext.Provider>
  );
};
