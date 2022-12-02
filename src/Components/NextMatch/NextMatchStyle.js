import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  .button_div {
    display: flex;
    justify-content: center;
    > a {
      color: ${({ theme }) => theme.colors.RedQatar};
      background-color: ${({ theme }) => theme.colors.bgRed};
      border: none;
      cursor: pointer;
      padding: 16px 48px;
      margin-top: 48px;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
    }
  }
`;

export const Matchs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  > ul:last-child {
    margin-bottom: 100px;
  }
`;
