import { NavLink } from "react-router-dom";

import { SearchInput } from "./SearchInput";

import pokemonLogo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <header>
      <img className="logo" src={pokemonLogo} />

      <nav className="navbar">
        <ul className="menu">
          <li className="menu-item">
            <NavLink className="navlink" to="#">
              PokemonHome
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink className="navlink" to="#">
              Categories
            </NavLink>
            <ul className="sub-menu">
              <li className="sub-menu-item">
                <NavLink className="navlink" to="#">
                  Type
                </NavLink>
              </li>
              <li className="sub-menu-item">
                <NavLink className="navlink" to="#">
                  Color
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <SearchInput />
    </header>
  );
};
