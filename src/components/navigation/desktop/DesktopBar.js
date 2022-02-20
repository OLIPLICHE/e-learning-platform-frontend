import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavLinks from '../links/NavLinks';

const Container = styled.div`
  display: flex;
  border: 0;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Bebas Neue', 'Arial', cursive;
  border-right: 1px solid #e6e6e6;
  color: black;
  align-items: center;
`;

const Brand = styled(NavLink)`
  height: 200px;
  width: 200px;
  padding: 1rem;
  margin-bottom: 10px;
  text-decoration: none !important;
`;

const DesktopBar = () => (
  <Container>
    <Brand to="/">
      Elearning
    </Brand>
    <NavLinks />
  </Container>
);

export default DesktopBar;
