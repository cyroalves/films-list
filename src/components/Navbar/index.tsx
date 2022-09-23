import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchForm from '../SearchForm';
import { Container, Logo, Menu, MenuItem } from './styles';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Link to="/">
          <Logo>Filmes</Logo>
        </Link>

        <Menu>
          <MenuItem></MenuItem>
          <MenuItem><SearchForm navigate={navigate} /></MenuItem>

        </Menu>
      </Container>
    </>
  );
}

export default Navbar;
