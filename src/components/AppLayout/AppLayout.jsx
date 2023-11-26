import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout () {
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
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>LOADING PAGE...</div>}> 
        <Outlet />
      </Suspense>
    </div>
    ) 
}
