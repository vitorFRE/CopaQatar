import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #1f1e1e;
  margin: 100px 0 48px 0;
  text-align: center;
`;

const TitleH1 = ({ text, ...props }) => {
  return <Container>{text}</Container>;
};

export default TitleH1;
