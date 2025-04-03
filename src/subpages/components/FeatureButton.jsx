// components/FeatureButton.js
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 2px solid rgba(107, 78, 197, 1.0);
  border-radius: 16px;
  padding: 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background-color: rgba(107, 78, 197, 0.1);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  max-width: 220px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #333;
`;

const Subtitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  color: rgba(107, 78, 197, 1.0);
`;

const Description = styled.p`
  font-size: 13px;
  color: #555;
  line-height: 1.4;
`;

export default function FeatureButton({ data, onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <Card onClick={handleClick}>
      <Thumbnail src={data.image} alt={data.title} />
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <Description>{data.description}</Description>
    </Card>
  );
  return (
    <Card>
      <Thumbnail src={data.image} alt={data.title} />
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <Description>{data.description}</Description>
    </Card>
  );
}
