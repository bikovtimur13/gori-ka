import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const Header: FC = () => {
  return (
    <Container>
      <ContainerBox className={styles.containerBox}>
        <NavUl>
          <NavLi>Воркспейсы</NavLi>
          <NavLi>Воркспейсы</NavLi>
          <NavLi>Воркспейсы</NavLi>
          <NavLi>Воркспейсы</NavLi>
          <NavLi>Воркспейсы</NavLi>
          <NavLi>Воркспейсы</NavLi>
          <NavLi>Воркспейсы</NavLi>
          <NavLi>Воркспейсы</NavLi>
          <NavLi>Воркспейсы</NavLi>
        </NavUl>

        <NavMenu>
          <NavMenuLogo>
            <ImageLogo src="/images/gorika-icon.svg" alt="Gori-ka logo" />
            <p>Gori-ka</p>
          </NavMenuLogo>
          <NavMenuSearch>
            <NavMenuSearchSelect>
              <option defaultValue="all">Везде</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
              <option value="option4">option4</option>
            </NavMenuSearchSelect>
            <NavMenuSearchInput type="text"></NavMenuSearchInput>
            <NavMenuSearchBtn>
              <ImageSearchBtn src="/images/search-img.svg" />
            </NavMenuSearchBtn>
          </NavMenuSearch>
          <NavMenuUser></NavMenuUser>
        </NavMenu>
      </ContainerBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #383838;
  display: grid;
`;

const ContainerBox = styled.div``;

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

const NavMenu = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

const ImageLogo = styled.img`
  width: 60px;
`;

const NavMenuLogo = styled.div`
  width: 20%;
  display: flex;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
  }
`;

const NavMenuSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 560px;
  height: 60px;
  border-radius: 13px;
  padding: 6px;

  background: #383838;
`;

const NavMenuUser = styled.div`
  width: 50%;
`;

const NavMenuSearchSelect = styled.select`
  display: flex;
  flex-direction: row;
  width: 114px;
  height: 48px;
  background-attachment: fixed;
  background: #000000;
  border: 1px solid #383838;
  border-radius: 11px;

  font-weight: 500;
  font-size: 21px;
  line-height: 100%;
`;

const NavMenuSearchInput = styled.input`
  border: none;
  color: #383838;
  outline: 0;

  font-weight: 500;
  font-size: 21px;
  line-height: 100%;
  color: #ffffff;

  &:active {
    border: none;
  }
`;

const NavMenuSearchBtn = styled.button`
  padding: 0;
  border: none;
  background: none;
`;

const ImageSearchBtn = styled.img``;

export default Header;
