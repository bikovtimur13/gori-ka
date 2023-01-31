import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import styles from '../styles/Home.module.css';

const Preloader: FC = () => {
  return (
    <Container className={styles.containerBox}>
      <LoadingLevel>
        <Scale></Scale>
      </LoadingLevel>
      <LogoImg>
        <Image src="/images/preloader-logo.svg" alt="Logo" />
      </LogoImg>
    </Container>
  );
};

const Container = styled.div``;

const LoadingLevel = styled.div`
  position: relative;
  margin: 0 auto;
  width: 155px;
  top: 171px;
  height: 7px;
  border-radius: 6.5px;
  background: #ffffff;
`;

const loading = keyframes`
  from {
      width: 0%;
  }to{
    width: 100%;
  }
`;

const Scale = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 6.5px;
  background: #30d5c8;
  animation: ${loading} 1s ease-in forwards infinite;
`;

const LogoImg = styled.div`
  position: relative;
  top: 216px;
`;

const Image = styled.img`
  width: 100%;
`;

export default Preloader;
