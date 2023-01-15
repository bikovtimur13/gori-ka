import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const Header: FC = () => {
  return (
    <Container>
      <NavUlContainer>
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
      </NavUlContainer>

      <ContainerBox className={styles.containerBox}>
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
          <NavMenuUser>
            <NavMenuMessage>
              <MessageIconImg
                src="/images/message-icon.svg"
                alt="message-icon"
              />
            </NavMenuMessage>
            <NavMenuAlert>
              <AlertIconImg src="/images/alert-icon.svg" alt="alert-icon" />
            </NavMenuAlert>
            <NavMenuUserIcon>
              <UserIconImg src="/images/user-icon.svg" alt="user-icon" />
            </NavMenuUserIcon>
          </NavMenuUser>
        </NavMenu>
      </ContainerBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
`;

const NavUlContainer = styled.div`
  height: 60px;
  background: #383838;
  display: grid;
  box-sizing: border-box;
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
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  padding: 2%;

  font-weight: 500;
  font-size: 21px;
  line-height: 100%;
`;

const NavMenuSearchInput = styled.input`
  border: none;
  background-color: #383838;
  outline: 0;
  height: 100%;

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
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const ImageSearchBtn = styled.img``;

const NavMenuMessage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: #383838;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const MessageIconImg = styled.img``;

const NavMenuAlert = NavMenuMessage;

const AlertIconImg = styled.img``;

const NavMenuUserIcon = styled.div`
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const UserIconImg = styled.img``;

export default Header;
