import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Container, NavItem, NavList, Navigation, Header } from '../AppLayout/AppLayout.styled';

export default function AppLayout () {
    return (
    <Container>
      <Header>
        <Navigation>
          <NavList>
            <NavItem>
              <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/movies'>Movies</NavLink>
            </NavItem>
          </NavList>
        </Navigation>
      </Header>
      <Suspense fallback={<div>LOADING PAGE...</div>}> 
        <Outlet />
      </Suspense>
    </Container>
    ) 
}
