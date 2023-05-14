import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li`
  margin-left: 30px;
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffbb00;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>WIC 70415 Jinwoong Lee</Logo>
      <Menu>
        <MenuItem><NavLink href="/">Home</NavLink></MenuItem>
        <MenuItem><NavLink href="/about">About</NavLink></MenuItem>
        <MenuItem><NavLink href="/projects">Projects</NavLink></MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;