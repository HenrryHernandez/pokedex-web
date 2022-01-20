import { useEffect, useMemo, useRef } from "react";

import { useGetPokemon } from "../../hooks/useGetPokemons";

import { PokemonCard } from "../../components/PokemonCard";
import { Navbar } from "../../components/Navbar";
import { Loading } from "../../components/Loading";

export const HomeScreen = () => {
  const { isFetching, basicPokemonInfoList, getPokemons } = useGetPokemon();

  const lastElement = useRef<Element>();

  const callbackFunc = async (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting && !isFetching) await getPokemons();
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 1,
    };
  }, []);

  const observer = new IntersectionObserver(callbackFunc, options);
  const cards = document.querySelectorAll(".card");

  useEffect(() => {
    if (!cards.length) return;

    if (lastElement.current) observer.unobserve(lastElement.current);

    const lastElementTemp = cards[cards.length - 1];
    lastElement.current = lastElementTemp;
    observer.observe(lastElementTemp);

    return () => {
      if (lastElement.current) observer.unobserve(lastElement.current);
    };
  }, [cards]);

  return (
    <div className="home-screen-container">
      <Navbar />

      {isFetching && <Loading />}

      <div className="pokemon-card-container">
        {basicPokemonInfoList.map((el) => (
          <PokemonCard key={el.id} pokemon={el} />
        ))}
      </div>
    </div>
  );
};
