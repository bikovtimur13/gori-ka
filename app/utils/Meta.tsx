import { FC } from 'react';
import Head from 'next/head';
import { metaType } from '.../../../types';

type metaTypeProps = {
  meta: metaType;
};

const Meta: FC<metaType> = ({ title, description, favicon }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Meta;
