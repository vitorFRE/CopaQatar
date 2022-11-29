import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  > h1 {
    padding-top: 100px;
    padding-bottom: 28px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export const Current = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  > h2 {
    text-align: center;
    padding: 10px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.bgColor};
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(60, 57, 57, 0.2);
  }
`;
