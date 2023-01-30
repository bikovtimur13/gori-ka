import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const SortPanel: FC = () => {
  return (
    <Container className={styles.containerBox}>
      <SortPanelWrapper>
        <Sort>
          <p>Сортировка</p>
        </Sort>
        <View>
          <p>Вид</p>
        </View>
      </SortPanelWrapper>
    </Container>
  );
};

const Container = styled.div``;

const SortPanelWrapper = styled.div`
  background-color: #383838;
  border-radius: 10px;
  margin: 20px 0;
  height: 60px;
  padding: 20px 41px 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  column-gap: 42px;

  p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 100%;
    color: #ffffff;
  }
`;

const Sort = styled.div``;

const View = styled.div``;

export default SortPanel;
