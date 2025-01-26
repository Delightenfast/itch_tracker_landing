import React from "react";
import styled from "styled-components";

import Instagram from "../assets/footer/instagram.png";
import Naver from "../assets/footer/naver.png";

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  color: #6c757d;
  padding: 40px 20px;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;

  .footer-top {
    margin-bottom: 20px;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
  }

  .footer-links a {
    text-decoration: none;
    color: #6c757d;

    &:hover {
      text-decoration: underline;
    }
  }

`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 50%;
  font-size: 20px;
  color: #555;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color:rgba(94, 74, 173, 1);
    color: #fff;
  }

  img {
    height: 32px;
    
  }

`;

const EmailInfo = styled.p`
  font-size: 14px;
  color: #777;
`;

const Footer = () => {

  return (
    <FooterContainer>
      <div className="footer-top">(주) 딜랏</div>
      <div>사업자 등록번호: 000-00-00000 | 대표: 류형주</div>
      <div>주소: 서울특별시 강남구 역삼동 테헤란로5길 7, 9층 102호 (역삼동, KG Tower)</div>

      <div className="footer-links">
        <a href="#">서비스 이용약관</a>
        <a href="#">개인정보 처리방침</a>
        <a href="#">위치기반서비스 이용약관</a>
      </div>
      <SocialIcons>
        <SocialIcon href="https://www.instagram.com/itchtracker_official/">
          <img src={Instagram}></img>
        </SocialIcon>
        <SocialIcon href="https://blog.naver.com/lightenfast">
          <img src={Naver}></img>
        </SocialIcon>

      </SocialIcons>
      <EmailInfo>문의: contact@lightenfast.com</EmailInfo>
    </FooterContainer>
  )

};

export default Footer
