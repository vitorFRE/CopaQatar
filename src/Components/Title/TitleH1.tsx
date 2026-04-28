import type { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.defaultTextColor};
  margin: 100px 0 48px 0;
  text-align: center;
`;

type TitleH1Props = { text: string } & ComponentPropsWithoutRef<typeof Container>;

const TitleH1 = ({ text, ...props }: TitleH1Props) => {
  return <Container {...props}>{text}</Container>;
};

export default TitleH1;
