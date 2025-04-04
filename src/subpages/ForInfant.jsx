import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

import Modal from "./components/Modal";
import Footer from "../components/Footer";
import FeatureButton from "./components/FeatureButton";

import Infant1 from "../assets/subpages/infant/infant_1.png";
import Infant2 from "../assets/subpages/infant/infant_2.png";
import Infant3 from "../assets/subpages/infant/infant_3.png";
import Infant4 from "../assets/subpages/infant/infant_4.png";
import Background from "../assets/subpages/infant/background.png";



const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 전체 높이 기준 */
`;

const Header = styled.header`
  padding: 60px 20px 60px;
  text-align: center;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
  `;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.h2`

font-size: 1.5rem;
font-weight: 600;
  color: #000;
  margin-bottom: 0px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentWrapper = styled.main`
  margin-top : 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #f0f4ff, #e0e7ff);
  padding: 20px 20px;
  text-align: center;
  display: flex;
  flex: 1; /* 빈 공간을 모두 채움 */
`;

const Description = styled.p`
  color: #333;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Guide = styled.p`
  color: #666;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 10px;

`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ForInfant = () => {

  function getQueryParamFromHash(key) {
    const hash = window.location.hash; // ex: "#/for-infant/?utm_source=google"
    const queryString = hash.split('?')[1]; // "utm_source=google"
    if (!queryString) return null;

    // queryString : "utm_source=google"
    return queryString
      .split('&')
      .map(param => param.split('='))
      .reduce((acc, [k, v]) => {
        acc[decodeURIComponent(k)] = decodeURIComponent(v);
        return acc;
      }, {})[key];
  }

  let userUUID = localStorage.getItem("userUUID");
  const utmSource = getQueryParamFromHash("utm_source") || "defaultSource";

  const [modalData, setModalData] = useState(null);
  const [tempToken, setTempToken] = useState(null);

  //USER UUID가 없을 경우 UUID 생성
  useEffect(() => {
    if (!userUUID) {
      const newUUID = uuidv4();
      userUUID = newUUID;
      // Set the new UUID in localStorage
      localStorage.setItem("userUUID", newUUID);
    }

    fetch("http://develop.delight-api.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw_id: "public" }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    }
    ).then((data) => {
      if (data && data.access_token) {
        setTempToken(data.access_token);
      } else {
        console.error("Invalid response data:", data);
      }
    }).catch((error) => {
      console.error("Error fetching temporary token:", error);
    });
  }, []);

  const handleCategoryClick = async (category) => {
    // Handle category click event
    await fetch("http://develop.delight-api.com/landing-page/category-click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + tempToken,
      },
      body: JSON.stringify({ "uuid": userUUID, "utm": utmSource, "category": category }),
    });

    console.log("Selected category:", category);

    const data = {
      ...categories[category],
      uuid: userUUID,
      utm: utmSource,
      category: category,
      token: tempToken,
    }

    setModalData(data);
  }

  const categories = [
    {
      title: "내 손 안의 아이 피부 관리 센서",
      subtitle: "우리 아기에게 딱 맞는 온도와 습도",
      descriptions: ["피부 상태에 최적인 환경을 실시간으로 알려주는 맞춤형 스마트 환경 디바이스입니다.", "아기가 있는 실내 환경을 실시간으로 기록하고, 실내 온습도가 위험 수치에 도달하면 알림을 보내드려요. 아이의 피부 상태에 따라 보습제 바르는 타이밍도 알려드려요."],
      image: Infant1,
      sendMessage: "아기 피부 예민 지수 소식받기"
    },
    {
      title: "사진으로 기록하고 관리하는 아이 피부 상태",
      subtitle: "찰칵! 3초면 끝",
      descriptions: ["우리 아이 피부의 불편함을 쉽게 기록하고 할 수 있어요.", "사진으로 쉽게 피부 상태를 기록하고, 피부 유해 환경 요인 데이터와 함께 증상을 추적해요."],
      image: Infant2,
      sendMessage: "우리 집 환경 분석 소식받기"
    },
    {
      title: "아이 피부 맞춤 스마트 IoT",
      subtitle: "피부 상태에 맞춘 자동 온습도 조절",
      descriptions: ["피부 상태에 따른 최적의 온습도 구간까지 안내해주는 피부 질환 예방 도우미.", "아이의 피부에 맞게 에어컨·가습기·제습기와 연동해 자동으로 조절해줘요."],
      image: Infant3,
      sendMessage: "찰칵! 사진 한 장으로 피부 패턴 소식받기"
    },
    {
      title: "의사에게 피부 데이터 전달",
      subtitle: "진료에 도움이 되는 아이 피부 리포트",
      descriptions: ['“우리 집 피부 주치의”처럼 정확한 진단과 상담이 쉬워요.', "설명하기 어려웠던 아이 피부 상태, 이제 사진과 환경 데이터로 명확하게 전달해요."],
      image: Infant4,
      sendMessage: "진료용 리포트 소식받기"
    },
  ];

  return (
    <PageWrapper>
      <Header>
        <Title>아토피 피부염으로 우는 아이, 이유를 몰라 더 걱정이죠?</Title>
      </Header>
      <ContentWrapper>
        <Subtitle>피부 문제의 원인을 데이터로 보여주는 스마트 센서 토닥이</Subtitle>
        <Guide>“관심있는 내용을 선택해 클릭해 주세요.”</Guide>

        <FeaturesGrid>
          {categories.map((item, idx) => (
            <FeatureButton key={idx} data={item} onClick={() => handleCategoryClick(idx)} />
          ))}
        </FeaturesGrid>
        <Modal data={modalData} onClose={() => setModalData(null)} />
        <Description> 토닥이는 우리아이의 피부건강을 위한 휴대용 온도습도 센서입니다. <br /> 아이 방이나 외출 시, 어디든 부착해 피부에 민감한 환경을 기록하고, 사진 한 장으로 증상도 쉽게 저장해, 피부과 전문의에게 전달할 수 있어요.</Description>

      </ContentWrapper>

      <Footer />
    </PageWrapper>
  );
};

export default ForInfant;
