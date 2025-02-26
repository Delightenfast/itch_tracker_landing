import React from "react";
import Slider from "react-slick";

import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { importImages } from "../utils/importImages";

const FeatureSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  background: linear-gradient(to bottom, #f0f4ff, #e0e7ff); /* Continuation gradient */
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 24px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
  max-width: 1500px;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const FeatureCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color:rgba(94, 74, 173, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 16px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  line-height: 1.5;
`;

const SliderContainer = styled.div`
  max-width: 80%;
  margin-top: 40px;
  margin-bottom: 40px;
  

`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  max-width: 90%; /* Reduce width on smaller screens */
  @media (max-width: 500px) {
    max-width: 80%; /* Reduce width on smaller screens */
  }
`;

const SlideImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  gap:16px;
`;

const SlideImage = styled.img`
  height: 300px;
  object-fit: cover;
  margin-bottom: 16px;

  @media (max-width: 1000px) {
    height: 100px;
  }
  @media (max-width: 500px) {
    height: 50px;
  }
`;

const SlideTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const SlideDescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  text-align: center;
`;


const FeatureSection = () => {
  const awardImages = importImages(require.context("../assets/slider", false, /\.(png|jpe?g|svg)$/));

  const slideData = [
    {
      images: [awardImages[0], awardImages[6], awardImages[7]],
      title: "가려움 추적기의 신뢰",
      description: "벤처기업확인서 인증, 연구개발전담부서 운영, TEU MED4 의료 혁신가 프로그램 등을 통해 혁신성과 신뢰를 인정받으며, 고객에게 개인화된 솔루션을 제공하고 있습니다.",
    },
    {
      images: [awardImages[8], awardImages[9]],
      title: "환경 데이터로 세상을 바꾸다: 공모전 수상",
      description: "환경 데이터 활용 공모전에서 수상하며, 지속 가능한 미래를 위한 데이터 기반의 창의적 아이디어와 실질적 해법을 제시했습니다.",
    },
    {
      //awardImages[1], awardImages[10],
      images: [awardImages[12], awardImages[11], awardImages[13]],
      title: "상호 성장과 협력을 위한 업무 제휴",
      description: "협력적 파트너십을 통해 상호 성장과 시너지를 창출하며, 공동의 목표를 달성하기 위해 협약을 체결하고 실행하고 있습니다.",
    },

    {
      //awardImages[2],
      images: [awardImages[3], awardImages[4], awardImages[5],],
      title: "고객 문제에 깊이 다가가기",
      description: "아토피피부염 등 다양한 피부질환을 가진 서포터즈, 엠버서더, 베타테스터와 함께 고객의 문제를 깊이 이해하며, 이를 바탕으로 지속적으로 평가하고 개선해 나가고 있습니다.",
    },
  ];
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <FeatureSectionContainer>
      <SectionTitle>나만의 맞춤 솔루션</SectionTitle>
      <FeaturesContainer>
        <FeatureCard>
          <FeatureIcon>1</FeatureIcon>
          <FeatureTitle>나의 가려움 요인을 확인해요</FeatureTitle>
          <FeatureDescription>
            가려움에 영향을 주는 <b>환경적 요인</b>
            <br />
            (온도, 습도, 대기질)과 <b>생활 습관</b>을
            <br />
            분석하여 문제를 더 잘 이해할 수 있어요
            <br />
            <br />
            데이터 기반 접근으로 가려움의 패턴과
            <br />
            발생 원인을 명확히 파악해요
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>2</FeatureIcon>
          <FeatureTitle>나만의 가려움 경향성을 파악해봐요</FeatureTitle>
          <FeatureDescription>
            가려움이 심해지면 <b>트리거</b>(발작 요인)를
            <br />
            알고, 이를 효과적으로 회피하는
            <br />
            방법을 제공받아보세요
            <br />
            <br />
            <b>예방 중심의 관리</b>로 가려움이
            <br />
            악화되지 않도록 도와드려요
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>3</FeatureIcon>
          <FeatureTitle>피부에 맞는 보습제 추천을 받아보세요</FeatureTitle>
          <FeatureDescription>
            현재 날씨와 피부 상태에
            <br />
            딱 맞는 보습제를 추천해,
            <br />
            피부 관리의 번거로움을 줄여드려요
            <br />
            <br />
            날씨 변화에 따른
            <br />
            맞춤형 솔루션 보습제 추천으로
            <br />
            효과적인 피부 보호를 도와드려요
          </FeatureDescription>
        </FeatureCard>
      </FeaturesContainer>
      <SliderContainer>
        <SectionTitle>우리가 걸어온 길</SectionTitle>
        <Slider {...sliderSettings}>
          {slideData.map((slide, index) => (
            <Slide key={index}>
              <SlideImageWrapper>
                {slide.images.map((image, imgIndex) => (
                  <SlideImage key={imgIndex} src={image} alt={`이미지 ${imgIndex + 1}`} />
                ))}
              </SlideImageWrapper>
              <SlideTitle>{slide.title}</SlideTitle>
              <SlideDescription>{slide.description}</SlideDescription>
            </Slide>
          ))}
        </Slider>
      </SliderContainer>
    </FeatureSectionContainer>
  );
};

export default FeatureSection;
