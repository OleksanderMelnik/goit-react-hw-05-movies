import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from '../pages/Movies/Movies'
import MoviesDetails from "../pages/MoviesDetails/MoviesDetails";
import Cast from '../components/Cast/Cast'
import Reviews from '../components/Reviews/Reviews';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
              <NavLink to='/movies/:movieId'>MoviesDetails</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000} theme="light"/>
    </div>
  );
};