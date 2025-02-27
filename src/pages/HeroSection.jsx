import React from "react";
import styled, { keyframes } from "styled-components";

import BackgroundImage from "../assets/background.png"; // 이미지 import

import BottomArrow from '../assets/bottomarrow.gif';
import AppDownloadButtons from "../components/CTAButton";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh; /* Full screen height */
  padding: 0 20px;
  background: linear-gradient(to bottom, #ffffff, #f0f4ff);
  position: relative;
  overflow: hidden;
  z-index:0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("${BackgroundImage}");
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: -1;
  }

  @media (max-width: 1000px) {
    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("${BackgroundImage}");
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: -1;
  }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 0;
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 2rem;
  color: #555;
  margin-top: 0;
  margin-bottom: 32px !important;
  animation: ${fadeInUp} 1.4s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  width: 48px;
  height: 48px;
  background-image: url("${BottomArrow}"); /* Add your indicator image path here */
  background-size: cover;
  background-position: center;
  cursor: pointer;
  animation: ${fadeInUp} 2.4s ease-out;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Title>가려움 관리로 더 행복한 삶을 만드세요</Title>
      <Subtitle>가려움 추적기는 단순한 기록 도구가 아닙니다</Subtitle>
      <AppDownloadButtons />
      <ScrollIndicator onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })} />
    </HeroContainer>
  );
};

export default HeroSection;
