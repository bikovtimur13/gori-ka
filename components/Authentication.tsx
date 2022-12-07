import { FC } from 'react';
import styled from 'styled-components';
import { userType } from '../types';

type userTypeProps = {
  user: userType;
};

const Authentication: FC<userType> = () => {
  return (
    <Container>
      <Header>
        <HeaderImg src="/images/gorika-icon-favicon.svg"></HeaderImg>
        <HeaderTitle>Gōri-ka iD</HeaderTitle>
      </Header>
      <Input></Input>
      <Btn></Btn>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.div``;

const Input = styled.input``;

const Btn = styled.button``;

const HeaderImg = styled.img``;

const HeaderTitle = styled.span``;

export default Authentication;
