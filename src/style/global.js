import styled from "styled-components";

// 스타일드 컴포넌트들
export const Container = styled.div`
  display: block;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: rgba(107, 78, 197, 1.0);
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #eee;
  margin-bottom: 1rem;
  @media (max-width: 960px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;