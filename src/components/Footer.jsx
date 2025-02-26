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

const EmailInfo = styled.a`
  font-size: 14px;
  color: #777;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #333;  /* 마우스를 올렸을 때 색상 변경 */
    text-decoration: underline;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 20px;

`;

const FooterLink = styled.a`
  color: #777;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #333; /* 마우스 오버 시 색상 변경 */
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 12px;

  }
`;


const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-top">(주) 딜랏</div>
      <div>사업자 등록번호: 759-86-02593 | 대표: 류형주</div>
      <div>주소: 서울특별시 강남구 역삼동 테헤란로5길 7, 9층 102호 (역삼동, KG Tower)</div>

      <FooterLinks>
        <FooterLink
          href="https://vanilla-meteoroid-aae.notion.site/11254b6d294c80f3b94fe75b3e605ea2?pvs=4"
          target="_blank"
        >
          서비스 이용약관
        </FooterLink>
        <FooterLink
          href="http://vanilla-meteoroid-aae.notion.site"
          target="_blank"
        >
          개인정보 처리방침
        </FooterLink>
        <FooterLink
          href="https://vanilla-meteoroid-aae.notion.site/11254b6d294c80128fe8ce5622d81059?pvs=4"
          target="_blank"
        >
          위치기반서비스 이용약관
        </FooterLink>
      </FooterLinks>
      <SocialIcons>
        <SocialIcon href="https://www.instagram.com/itchtracker_official/" target="_blank">
          <img src={Instagram}></img>
        </SocialIcon>
        <SocialIcon href="https://blog.naver.com/lightenfast" target="_blank">
          <img src={Naver}></img>
        </SocialIcon>

      </SocialIcons>
      <EmailInfo href="mailto:contact@lightenfast.com">문의: contact@lightenfast.com</EmailInfo>
    </FooterContainer>
  )

};

export default Footer
