import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import Meta from '../app/utils/Meta';
import Header from '../components/Header';
import ArticleSwiper from '../components/ArticleSwiper';

export default function Home() {
  // class MyDocuments extends Document{
  //   static async getInitialProps(ctx: DocumentContext): Promise<any>{
  //     const initialProps = await.Document.getInitialProps(ctx);
  //     return {...initialProps};
  //   }
  // }

  return (
    <div className={styles.container}>
      <Container>
        <Meta
          title="Gori-ka"
          description="Gori-ka"
          favicon="/images/favicon.ico"
        />
        <Header />
        <ArticleSwiper />
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 1920px;
`;
