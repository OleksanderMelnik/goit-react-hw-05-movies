import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Movies from "./pages/Movies/MoviesPage";
import MoviesDetails from "./pages/MoviesDetails/MoviesDetailsPage";

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/movies'>Movies</NavLink>
            </li>
            <li>
              <NavLink to='/movies/:'>MoviesDetails</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
      </Routes>
    </div>
  );
};
