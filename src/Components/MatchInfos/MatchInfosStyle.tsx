import styled from 'styled-components';

export const MatchInfosContainer = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const MatchDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Eventos = styled.div`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  width: 100%;
  box-shadow: 3px 3px 3px rgba(60, 57, 57, 0.2);

  .eventos_ {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 6px;
    align-items: center;
    gap: 10px;

    > li {
      color: ${({ theme }) => theme.colors.RedQatar};
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 22px;
    }
  }

  .eventos_time {
    padding: 10px;
    display: flex;
    justify-content: space-between;

    .event_name {
      color: ${({ theme }) => theme.colors.RedQatar};
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 22px;
    }

    > div {
      > ul {
        margin-bottom: 20px;
      }
    }

    > div:last-child {
      li {
        text-align: right;
      }
    }
  }
`;
