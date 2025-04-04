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
  max-width: 400px;
  border-radius: 12px;
  margin-bottom: 0px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 6px;
  color: #333;
`;

const Subtitle = styled.h4`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 0px;
  color: rgba(107, 78, 197, 1.0);
`;

export default function FeatureButton({ data, onClick }) {
  return (
    <Card onClick={() => onClick(data)}>
      <Title>{data.title}</Title>
      <Thumbnail src={data.image} alt={data.title} />
      <Subtitle>{data.subtitle}</Subtitle>
    </Card>
  );
}
