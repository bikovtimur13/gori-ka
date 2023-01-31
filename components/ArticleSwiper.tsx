import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import 'swiper/css';

import { useRef } from 'react';
import SwiperCore, {
  EffectFade,
  Pagination,
  Autoplay,
  Navigation,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const ArticleSwiper: FC = () => {
  SwiperCore.use([EffectFade, Pagination, Autoplay]);
  const swiperRef = useRef() as any;
  return (
    <Container className={styles.containerBox}>
      <Swiper
        slidesPerView={4.6}
        // centeredSlides={true}
        ref={swiperRef}
        // effect={'fade'}
        spaceBetween={22}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
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
  height: 140px;
  border-radius: 10px;
  padding: 20px;
  background-color: #383838;
  display: flex;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
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
