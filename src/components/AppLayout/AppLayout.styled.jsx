import styled from 'styled-components';

export const Header = styled.header`
   
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
    
`;

export const Container = styled.div`
  padding: 25px;
`;
export const Navigation = styled.nav`
  margin-bottom: 24px;
`;
export const NavList = styled.ul`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  display: flex;
  gap: 18px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.6);

`;

export const NavItem = styled.li`
  span {
    color: #ffc700;
  }
  a:hover,
  a:focus {
    color: violet;
  }
`;