import React from "react";
import styled, { keyframes } from "styled-components";

import BackgroundImage from "../assets/background.png"; // 이미지 import
import PlayStoreIcon from '../assets/playstore_icon.svg';
import AppStoreIcon from '../assets/appstore_icon.svg';
import BottomArrow from '../assets/bottomarrow.gif';

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

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 2rem;
  color: #555;
  margin-top: 0;
  animation: ${fadeInUp} 1.4s ease-out;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  animation: ${fadeInUp} 1.4s ease-out;

  a {
    text-decoration-line: none;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px; /* Increased padding for larger buttons */
  font-size: 1.5rem; /* Increased font size */
  font-weight: 700;
  color: #fff;
  background-color: rgba(71, 41, 126, 1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(71, 41, 126, 0.8);
  }

  img {
    height: 24px; /* Increased icon size */
  }

  @media (max-width: 1000px) {
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
      <ButtonContainer>
        <StyledButton as="a" href="https://apps.apple.com/app/id6736654359" target="_blank" rel="noopener noreferrer">
          <img src={AppStoreIcon} alt="App Store" />
          App Store
        </StyledButton>
        <StyledButton as="a" href="https://play.google.com/store/apps/details?id=com.Delight.todacmvp" target="_blank" rel="noopener noreferrer">
          <img src={PlayStoreIcon} alt="Google Play" />
          Google Play
        </StyledButton>
      </ButtonContainer>
      <ScrollIndicator onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })} />
    </HeroContainer>
  );
};

export default HeroSection;
