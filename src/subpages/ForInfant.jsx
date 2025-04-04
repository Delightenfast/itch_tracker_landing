import React, { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

import FeatureButton from "./components/FeatureButton";

import Infant1 from "../assets/subpages/infant/infant_1.png";
import Infant2 from "../assets/subpages/infant/infant_2.png";
import Infant3 from "../assets/subpages/infant/infant_3.png";
import Infant4 from "../assets/subpages/infant/infant_4.png";


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 전체 높이 기준 */
`;

const Header = styled.header`
  background: rgba(107, 78, 197, 1.0);
  padding: 60px 20px 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex: 1; /* 빈 공간을 모두 채움 */
`;

const Description = styled.p`
  color: #333;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 30px;
`;

const Guide = styled.p`
  margin-bottom: 16px;
  color: #666;
  font-weight: 600;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px 20px;
`;

const Footer = styled.footer`
  background: rgba(107, 78, 197, 1.0);
  padding: 40px 20px;
  text-align: center;
`;

const BottomText = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #fff;
`;

const ForInfant = () => {
  let userUUID = localStorage.getItem("userUUID");
  const utmSource = new URLSearchParams(window.location.search).get("utm_source") || "defaultUTM";

  //USER UUID가 없을 경우 UUID 생성
  useEffect(() => {
    if (!userUUID) {
      const newUUID = uuidv4();
      userUUID = newUUID;
      // Set the new UUID in localStorage
      localStorage.setItem("userUUID", newUUID);
    }
  }, []);

  const handleCategoryClick = async (category) => {
    // Handle category click event
    const response = await fetch("http://develop.delight-api.com/landing-page/category-click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "uuid": userUUID, "utm": utmSource, "category": category }),
    });
    console.log("Selected category:", category);
  }

  const categories = [
    {
      title: "내 손 안의 아이 피부 관리 센서",
      subtitle: "우리 아기에게 딱 맞는 온도와 습도",
      description: "피부 상태에 최적인 환경을 실시간으로 알려주는 맞춤형 스마트 환경 디바이스입니다.",
      image: Infant1,
    },
    {
      title: "사진으로 기록하고 관리하는 아이 피부 상태",
      subtitle: "찰칵! 3초면 끝",
      description: "사진으로 쉽게 피부 상태를 기록하고 피부 유해 환경요인 데이터와 함께 증상을 추적해요.",
      image: Infant2,
    },
    {
      title: "아이 피부 맞춤 스마트 IOT",
      subtitle: "피부 상태에 맞춘 자동 온습도 조절",
      description: "아이의 피부에 맞게 에어컨·가습기·제습기와 연동해 자동으로 조절해줘요.",
      image: Infant3,
    },
    {
      title: "의사에게 피부 데이터 전달",
      subtitle: "진료에 도움이 되는 아이 피부 리포트",
      description: "설명하기 어려웠던 아이 피부 상태, 이제 사진과 환경 데이터로 명확하게 전달해요.",
      image: Infant4,
    },
  ];

  return (
    <PageWrapper>
      <Header>
        <Title>아토피피부염으로 우는 아이, 이유를 몰라 더 걱정이죠?</Title>
        <Subtitle>피부 문제의 원인을 데이터로 보여주는 스마트 센서 ‘토닥이’</Subtitle>
      </Header>

      <ContentWrapper>
        <Description>
          토닥이는 우리 아이의 피부 건강을 위한 휴대용 온습도 센서입니다. 아이 방이나 외출시, 어디든 부착해 피부에 민감한 환경을 기록하고,
          사진 한 장으로 증상도 쉽게 저장해, 피부과 전문의에게 전달할 수 있어요.
        </Description>
        <Guide>궁금한 기능을 선택해 클릭해 주세요.</Guide>
        <FeaturesGrid>
          {categories.map((item, idx) => (
            <FeatureButton key={idx} data={item} onClick={() => handleCategoryClick(idx)} />
          ))}
        </FeaturesGrid>
      </ContentWrapper>

      <Footer>
        <BottomText>아이의 피부걱정 이제, 내손안의 주치의 토닥이와 함께해요!</BottomText>
      </Footer>
    </PageWrapper>
  );
};

export default ForInfant;
