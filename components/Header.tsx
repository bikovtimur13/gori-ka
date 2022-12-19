import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

const Header: FC = () => {
  return (
    <Container>
      <NavUl>
        <NavLi>Воркспейсы</NavLi>
        <NavLi>Воркспейсы</NavLi>
        <NavLi>Воркспейсы</NavLi>
        <NavLi>Воркспейсы</NavLi>
        <NavLi>Воркспейсы</NavLi>
        <NavLi>Воркспейсы</NavLi>
      </NavUl>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #383838;
  display: grid;
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavLi = styled.li`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #ffffff;
  list-style: none;
`;

export default Header;
