import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm';
import { Container, Logo, Menu, MenuItem } from './styles';

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <Logo>Filmes</Logo>
        </Link>

        <Menu>
          <MenuItem></MenuItem>
          <MenuItem><SearchForm /></MenuItem>

        </Menu>
      </Container>
    </>
  );
}

export default Navbar;
