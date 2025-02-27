import React, { useState } from "react";
import styled from "styled-components";
import { importImages } from "../utils/importImages";

const FeatureSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  background: linear-gradient(to bottom, #f0f4ff, #e0e7ff);
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin: 120px 0;
  width: 90%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 80px 0;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin: 60px 0;
  }
`;


const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isRightAligned }) => (isRightAligned ? "flex-end" : "flex-start")};
  text-align: ${({ isRightAligned }) => (isRightAligned ? "right" : "left")};
  padding: 40px 20px;
  width: 90%;
  max-width: 1200px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 30px 15px;
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #6366f1;
  margin-bottom: 12px;
`;

const TagIcon = styled.span`
  margin-right: 6px;
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #1f2937;
  line-height: 1.4;
  text-align: left;
  margin: 11px 0;

  @media (max-width: 768px) {
    font-size: 26px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #4b5563;
  line-height: 1.6;
  text-align: left;
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

/** 📌 재사용 가능한 기능 섹션 */
const SectionFeature = ({ icon, tag, titles, description, index }) => {
  const isRightAligned = index % 2 === 1; // 짝수 인덱스는 오른쪽 정렬
  return (
    <SectionContainer isRightAligned={isRightAligned}>
      <Tag>
        <TagIcon>{icon}</TagIcon> {tag}
      </Tag>
      <Title>{titles[0]} {titles[1]}</Title>
      <Description>{description}</Description>
    </SectionContainer>
  );
};

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;
  width: 90%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
  align-self: flex-start;
  max-width: 500px;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 90%;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-bottom: 10px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  max-width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;


const ImageWrapper = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
`;

const Image = styled.img`
  height: 500px;
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const SlideFeature = ({ icon, tag, titles, description, images }) => {
  return (
    <SlideContainer>
      <TextContainer>
        <Tag>
          <TagIcon>{icon}</TagIcon> {tag}
        </Tag>
        <Title>{titles[0]} <br />{titles[1]}</Title>
        <Description>{description}</Description>
      </TextContainer>
      {/* 이미지 여러 개 배치 + 가로 스크롤 */}
      <ImageContainer>
        {images.map((imgSrc, index) => (
          <ImageWrapper key={index}>
            <Image src={imgSrc} alt={`이미지 ${index + 1}`} loading="lazy" />
          </ImageWrapper>
        ))}
      </ImageContainer>
    </SlideContainer>
  );
};


const FeatureSection = () => {
  const awardImages = importImages(require.context("../assets/slider", false, /\.(png|jpe?g|svg)$/));

  const featureData = [
    {
      icon: "🔍",
      tag: "가려움 요인 분석",
      titles: ["나의 가려움 요인을", "확인해요"],
      description: "가려움에 영향을 주는 환경적 요인(온도, 습도, 대기질)과 생활 습관을 분석하여 문제를 더 잘 이해할 수 있어요. 데이터 기반 접근으로 가려움의 패턴과 발생 원인을 명확히 파악해요.",
    },
    {
      icon: "📊",
      tag: "가려움 경향성 분석",
      titles: ["나만의 가려움 경향성을", "파악해봐요"],
      description: "가려움이 심해지면 트리거(발작 요인)를 알고, 이를 효과적으로 회피하는 방법을 제공받아보세요. 예방 중심의 관리로 가려움이 악화되지 않도록 도와드려요.",
    },
    {
      icon: "🧴",
      tag: "맞춤형 보습제 추천",
      titles: ["피부에 맞는 보습제 추천을", "받아보세요"],
      description: "현재 날씨와 피부 상태에 딱 맞는 보습제를 추천해, 피부 관리의 번거로움을 줄여드려요. 날씨 변화에 따른 맞춤형 솔루션 보습제 추천으로 효과적인 피부 보호를 도와드려요.",
    },
  ];

  const slideData = [
    {
      icon: "🏆",
      tag: "가려움 추적기의 신뢰",
      titles: ["신뢰받는 가려움 관리 솔루션", ""],
      description: "벤처기업 인증과 연구개발 전담부서 운영을 통해 혁신성과 신뢰를 인정받았어요. 고객별 맞춤 솔루션을 제공하며, 더욱 효과적인 가려움 관리 서비스를 만들어가고 있어요.",
      images: [awardImages[0], awardImages[6], awardImages[7]], // 여러 개의 이미지 추가
    },
    {
      icon: "🌍",
      tag: "환경 데이터 활용",
      titles: ["환경 데이터로 가려움 패턴을 ", "분석해요"],
      description: "가려움과 환경 요인의 관계를 연구하며, 공모전 수상 경험을 통해 데이터 기반의 피부 관리 솔루션을 발전시키고 있어요. 날씨와 공기질이 피부에 미치는 영향을 분석하고 있어요.",
      images: [awardImages[8], awardImages[9]], // 여러 개의 이미지 추가
    },
    {
      icon: "🤝",
      tag: "업무 제휴",
      titles: ["더 나은 가려움 관리 서비스를 ", "위해 협력해요"],
      description: "다양한 기관과 협력하여 더욱 효과적인 가려움 관리 방법을 연구하고 있어요. 파트너십을 통해 지속적인 개선과 발전을 이루어 가고 있어요.",
      images: [awardImages[10], awardImages[11], awardImages[12], awardImages[13]], // 여러 개의 이미지 추가
    },
    {
      icon: "📢",
      tag: "사용자 중심의 연구",
      titles: ["가려움 고민을 ", " 직접 듣고 개선해요"],
      description: "아토피 피부염 등 다양한 피부 고민을 가진 사용자들의 의견을 바탕으로 서비스를 발전시키고 있어요. 서포터즈, 앰버서더, 베타테스터와 함께 지속적인 연구와 개선을 이어가고 있어요",
      images: [awardImages[2], awardImages[3], awardImages[4], awardImages[5]], // 여러 개의 이미지 추가
    },
  ];



  return (
    <FeatureSectionContainer>
      <SectionTitle>내 피부 상태를 한눈에 확인하고, 효과적으로 관리하세요. <br /> 가려움 추적기와 함께라면 당신의 일상이 편안해질 거예요.</SectionTitle>

      {featureData.map((feature, index) => (
        <SectionFeature key={index} index={index} {...feature} />
      ))}

      <SectionTitle>저희는 피부 건강 데이터를 연구하며, <br /> 더 효과적인 가려움 관리 솔루션을 개발하고 있어요.</SectionTitle>
      {slideData.map((slide, index) => (
        <SlideFeature key={index} {...slide} />
      ))}
    </FeatureSectionContainer>
  );
};

export default FeatureSection;
