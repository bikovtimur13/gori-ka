import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Meta from '../app/utils/Meta';

export default function Home() {
  // class MyDocuments extends Document{
  //   static async getInitialProps(ctx: DocumentContext): Promise<any>{
  //     const initialProps = await.Document.getInitialProps(ctx);
  //     return {...initialProps};
  //   }
  // }

  return (
    <div className={styles.container}>
      <Meta title="Gori-ka" description="Gori-ka" favicon="/favicon.ico" />
    </div>
  );
}
