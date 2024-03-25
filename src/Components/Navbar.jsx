// Navbar.js
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 20px;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.div`
  color: #fff;
  font-size: 24px;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
`;

const NavMenuItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>My Portfolio</NavLogo>
        <NavMenu>
          <NavMenuItem>
            <NavLink href="#about">About</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#portfolio">Portfolio</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavMenuItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
