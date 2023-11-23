import { NavLink, Outlet } from "react-router-dom";

export default function MoviesDetails() {
    return (
    <>
        <div>MoviesDetails</div>
        <ul>
            <li>
              <NavLink to='cast'>cast</NavLink>
            </li>
            <li>
              <NavLink to='reviews'>reviews</NavLink>
            </li>
        </ul>
        <Outlet />
    </>
    
    )   
}