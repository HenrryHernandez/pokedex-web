import { useContext } from "react";

import { SearchInputContext } from "../contexts/SearchInputContext";

export const SearchInput = () => {
  const { searchInput, setSearchInput } = useContext(SearchInputContext);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        value={searchInput}
        onChange={(el) => setSearchInput(el.target.value)}
      />
    </div>
  );
};
