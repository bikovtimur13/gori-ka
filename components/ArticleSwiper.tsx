import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import 'swiper/css';

import { useRef } from 'react';
import SwiperCore, { EffectFade, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([EffectFade, Pagination]);

const ArticleSwiper: FC = () => {
  const swiperRef = useRef(null);
  return (
    <Container className={styles.containerBox}>
      <Swiper
        slidesPerView={3}
        ref={swiperRef}
        effect={'fade'}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        autoplay={true}
        className="articleSwiper"
      >
        <SwiperSlide>
          <ArticleContainer>
            <ArticleImage>
              <ArticleImg src="/images/article-img-1.png" alt="article-image" />
            </ArticleImage>
            <ArticleTitleContainer>
              <ArticleTitleTop>
                Подвернуть штанины по диагонали, очень в...
              </ArticleTitleTop>
              <ArticleTitleBottom>Проект «Сальто»</ArticleTitleBottom>
            </ArticleTitleContainer>
          </ArticleContainer>
        </SwiperSlide>

        <SwiperSlide>
          <ArticleContainer>
            <ArticleImage>
              <ArticleImg src="/images/article-img-2.png" alt="article-image" />
            </ArticleImage>
            <ArticleTitleContainer>
              <ArticleTitleTop>
                Подвернуть штанины по диагонали, очень в...
              </ArticleTitleTop>
              <ArticleTitleBottom>Проект «Сальто»</ArticleTitleBottom>
            </ArticleTitleContainer>
          </ArticleContainer>
        </SwiperSlide>

        <SwiperSlide>
          <ArticleContainer>
            <ArticleImage>
              <ArticleImg src="/images/article-img-3.png" alt="article-image" />
            </ArticleImage>
            <ArticleTitleContainer>
              <ArticleTitleTop>
                Подвернуть штанины по диагонали, очень в...
              </ArticleTitleTop>
              <ArticleTitleBottom>Проект «Сальто»</ArticleTitleBottom>
            </ArticleTitleContainer>
          </ArticleContainer>
        </SwiperSlide>

        <SwiperSlide>
          <ArticleContainer>
            <ArticleImage>
              <ArticleImg src="/images/article-img-4.png" alt="article-image" />
            </ArticleImage>
            <ArticleTitleContainer>
              <ArticleTitleTop>
                Подвернуть штанины по диагонали, очень в...
              </ArticleTitleTop>
              <ArticleTitleBottom>Проект «Сальто»</ArticleTitleBottom>
            </ArticleTitleContainer>
          </ArticleContainer>
        </SwiperSlide>

        <SwiperSlide>
          <ArticleContainer>
            <ArticleImage>
              <ArticleImg src="/images/article-img-5.png" alt="article-image" />
            </ArticleImage>
            <ArticleTitleContainer>
              <ArticleTitleTop>
                Подвернуть штанины по диагонали, очень в...
              </ArticleTitleTop>
              <ArticleTitleBottom>Проект «Сальто»</ArticleTitleBottom>
            </ArticleTitleContainer>
          </ArticleContainer>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ArticleContainer = styled.div`
  width: 100%;
  max-width: 398px;
  height: 140px;
  border-radius: 10px;
  padding: 20px;
  background-color: #383838;
  display: flex;
  align-items: center;
`;

const ArticleImage = styled.div``;

const ArticleImg = styled.img``;

const ArticleTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const ArticleTitleTop = styled.p`
  font-weight: 500;
  font-size: 21px;
  line-height: 120%;
  color: #ffffff;
`;

const ArticleTitleBottom = styled.p`
  font-weight: 500;
  font-size: 21px;
  line-height: 120%;
  color: #a7a7a7;
`;

export default ArticleSwiper;
