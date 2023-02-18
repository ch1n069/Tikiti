import { createContext, useState } from "react";
import Movie from "./data/Movie";

const MoviesCards = createContext();
const MovieContext = ({ children }) => {
  const [seats, setSeats] = useState([]);
  return (
    <MoviesCards.Provider value={{ seats, setSeats }}>
      {children}
    </MoviesCards.Provider>
  );
};

export { MoviesCards, MovieContext };
