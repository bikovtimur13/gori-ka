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
          <HeaderTitle>
            <span>Gōri-ka iD</span>
          </HeaderTitle>
        </Header>
        <Input></Input>
        <Btn></Btn>
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
  max-height: 310px;
  border-radius: 11px;
`;

const Header = styled.div`
  height: 42px;
  width: 151px;
`;

const Input = styled.input``;

const Btn = styled.button``;

const HeaderImg = styled.img``;

const HeaderTitle = styled.span``;

export default Authentication;
