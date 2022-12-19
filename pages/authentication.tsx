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
          <HeaderImg src="/images/gorika-icon.svg"></HeaderImg>
          <HeaderTitle>Gōri-ka iD</HeaderTitle>
        </Header>
        <Input
          placeholder="name@mailbox.com"
          type="email"
          name="email"
          required
        ></Input>
        <Btn>
          Выслать пароль
          <ImgArrow src="/images/long-arrow-right.svg" />
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
  margin-top: 50px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  width: 151px;
`;

const Input = styled.input`
  background: #ffffff;
  height: 70px;
  border-radius: 10px;
  background: #bababa;
  text-align: center;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;

  &::placeholder {
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    color: #a7a7a7;
  }

  &:active {
    background: #ffffff;
    border: none;
    color: #000000;

    &::placeholder {
      opacity: 0;
    }
  }
  &:hover {
    background: #ffffff;
    border: none;
    color: #000000;

    &::placeholder {
      opacity: 0;
    }
  }
`;

const Btn = styled.button`
  background: #808080;
  height: 70px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #808080;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;
  color: #000000;

  &:hover {
    background: #30d5c8;
    cursor: pointer;
  }
`;

const ImgArrow = styled.img``;

const HeaderImg = styled.img``;

const HeaderTitle = styled.span`
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  color: #ffffff;
`;

export default Authentication;
