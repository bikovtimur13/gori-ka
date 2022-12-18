import { FC } from 'react';
import styled from 'styled-components';
import { userProps } from '../types';

type userTypeProps = {
  user: userProps;
};

const Authentication: FC<userProps> = () => {
  return (
    <Container>
      <ModalWrapper>
        <Header>
          <HeaderImg src="../public/images/gorika-icon.svg"></HeaderImg>
          <HeaderTitle>Gōri-ka iD</HeaderTitle>
        </Header>
        <Input></Input>
        <Btn>
          <span>Выслать пароль</span>
        </Btn>
      </ModalWrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #30d5c8;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: 320px;
  background: #000000;
  display: flex;
  flex-direction: column;
  max-height: 262px;
  border-radius: 11px;
  padding: 20px;
  justify-content: space-evenly;
`;

const Header = styled.div`
  height: 42px;
  width: 151px;
`;

const Input = styled.input`
  background: #ffffff;
  height: 70px;
  border-radius: 10px;
`;

const Btn = styled.button`
  background: #ffffff;
  height: 70px;
  border-radius: 10px;
  background: #30d5c8;

  span {
    background: #30d5c8;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
    color: #000000;
  }
`;

const HeaderImg = styled.img``;

const HeaderTitle = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  color: #ffffff;
`;

export default Authentication;
