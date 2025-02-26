import React from "react";
import styled from "styled-components";
import logo from "../assets/bomi.png"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 24px;
    margin-right: 8px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    font-size: 14px;
    text-decoration: none;
    color: #333;
    cursor: pointer;

    &:hover {
      color: #0078ff;
    }
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <img src={logo} alt="bomi" />
                <span>가려움 추적기</span>
            </Logo>
            <Nav>
                <a href="#">회사 소개</a>
            </Nav>

        </HeaderContainer>
    );
};

export default Header;
