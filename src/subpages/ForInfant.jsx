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
  background: #DDEBF9;
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

    fetch("https://develop.delight-api.com/user/login", {
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
    await fetch("https://develop.delight-api.com/landing-page/category-click", {
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
      title: "아이가 머무는 모든 공간, 환경 센서가 자동으로 측정해요",
      subtitle: "집안 온도 24도, 습도 36%, 먼지 ‘나쁨’ → 아이 피부 건조 악화 가능성 87%",
      image: Infant1,
      modalTitle: "아이가 머무는 모든 공간, 환경 센서가 자동으로 측정해요",
      modalDescription: "언제 어디서든 눈에 보이지 않는 실내 환경 변화, 아이 피부는 하루에도 수없이 반응하고 있어요",
      descriptions: [
        "✔온도, 습도부터 공기질까지 자동 감지 & 기록",
        "✔ 위험 수치 알림으로 아이 피부 케어",
        "✔ 아이 피부 상태에 맞춘 보습 타이밍 알림"
      ],
      promoteEmail: "이메일을 남겨주시면, 추후 환경 센서 소식을 받으실 수 있어요!",
      promoteEmailPlaceholder: "(옵션) 환경 센서를 어떻게 사용하고 싶으신가요?",
      sendMessage: "환경 센서 소식 받기"
    },
    {
      title: "아이 피부, 며칠 전에 어땠는지 기억 나세요? 원인을 찾으려면 기록이 필요해요",
      subtitle: "아이 피부 상태, 사진으로 기록하고 관리해요",
      image: Infant2,
      modalTitle: "아이 피부 상태, 사진으로 기록하고 관리해요",
      modalDescription: "“어제보다 나아진 건가…?” 아이 피부 상태, 헷갈리기 쉬워요",
      descriptions: [
        "✔ 사진으로 쉽게 피부 상태를 기록 & 관리",
        "✔ 사진 찍을 때 눈에 보이지 않는 유해 환경 요인 데이터로 기록",
        "✔ 병원 방문 시에도 큰 도움"
      ],
      promoteEmail: "이메일을 남겨주시면, 추후 사진 기록과 관리 소식을 받으실 수 있어요!",
      promoteEmailPlaceholder: "(옵션) 사진으로 어떻게 기록하고 관리하고 싶으신가요?",
      sendMessage: "사진 기록 & 관리 소식 받기"
    },
    {
      title: "우리 집 환경이 아이 피부에 안 맞는 걸까? 스마트 IoT가 아이 피부 맞춤 환경을 알려드려요",
      subtitle: "아이 피부에 최적화된 환경을 자동으로 설정해줘요",
      image: Infant3,
      modalTitle: "아이 피부에 최적화된 환경을 자동으로 설정해줘요",
      modalDescription: "“우리 집 환경이 아이 피부에 안 맞는 걸까?” 스마트 IoT가 아이 피부 맞춤 환경을 알려드려요",
      descriptions: [
        "✔ 아이 피부 최적 온·습도 구간 자동 분석",
        "✔ 에어컨, 가습기, 제습기 연동으로 ‘알아서 조절’",
      ],
      promoteEmail: "이메일을 남겨주시면, 추후 맞춤 환경 자동 설정에 대한 소식을 받으실 수 있어요!",
      promoteEmailPlaceholder: "(옵션) 맞춤 환경 자동 설정 서비스를 어떻게 사용하고 싶으신가요?",
      sendMessage: "아이 피부 맞춤 환경 소식 받기"
    },
    {
      title: "병원에서 아이 피부 상태 설명, 막막하셨죠? 아이 피부 상태, 말보다 데이터가 정확합니다",
      subtitle: "아이 피부 상태, 사진과 환경 데이터로 정확하게 전달하세요",
      image: Infant4,
      modalTitle: "아이 피부 상태, 사진과 환경 데이터로 정확하게 전달하세요",
      modalDescription: "“병원에서 아이 피부 상태 설명, 막막하셨죠?” 아이 피부 상태, 말보다 데이터가 정확합니다.",
      descriptions: [
        "✔ 사진과 환경 요인 데이터 기록",
        "✔ 진료 시 참고 가능한 ‘아이 피부 리포트’ 제공",
      ],
      promoteEmail: "이메일을 남겨주시면, 추후 아이 피부 리포트에 대한 소식을 받으실 수 있어요!",
      promoteEmailPlaceholder: "(옵션) 아이 피부 리포트를 어떻게 사용하고 싶으신가요?",
      sendMessage: "아이 피부 리포트 소식 받기"
    },
  ];

  return (
    <PageWrapper>
      <Header>
        <Title>아토피 피부염으로 우는 아이, 이유를 몰라 더 걱정이죠?</Title>
      </Header>
      <ContentWrapper>
        <Subtitle>알고 보면 온도, 습도, 먼지, 심지어 공기 속 포름알데히드까지<br />우리 주변 환경이 아기 피부에 직접적인 영향을 미치고 있어요</Subtitle>
        <Guide>“아래 내용을 클릭하면 상세 내용을 볼 수 있어요”</Guide>

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
