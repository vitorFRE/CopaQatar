import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const GroupsContent = styled.div`
  display: flex;
  gap: 0px 32px;
  overflow-x: auto;

  > ul {
    background-color: ${({ theme }) => theme.colors.bgColor};
    margin-bottom: 48px;
    border-radius: 6px;
    width: 384px;

    > li {
      color: ${({ theme }) => theme.colors.greyColor};
      width: 384px;

      display: flex;
      gap: 32px;
      align-items: center;

      font-weight: 500;
      font-size: 1.5rem;
      padding-left: 32px;
      padding-bottom: 43px;

      &:first-child {
        font-weight: 600;
        justify-content: center;
        padding: 32px 0 45px 0;
      }
    }
  }
`;

export const GroupsNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  > button {
    background-color: #f4f4f4;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme.colors.RedQatar};
    }
  }
`;
