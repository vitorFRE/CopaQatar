import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Tabelas = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  > table {
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.bgColor};
    border-radius: 6px;
    text-align: left;
    width: 100%;

    tr {
      td:first-child {
        display: flex;
        gap: 5px;
        font-weight: 500;

        > img {
          width: 20px;
        }
      }
      > td {
        padding-bottom: 10px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.RedQatar};
      }
      > th:first-child {
        width: 200px;
        max-width: 100%;
        color: ${({ theme }) => theme.colors.RedQatar};
      }
      > th {
        padding-bottom: 15px;
      }
    }
  }
`;
