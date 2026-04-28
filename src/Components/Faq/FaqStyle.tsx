import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Accordion = styled.div`
  .faq_accordion_resposta {
    max-height: 0;
    overflow: hidden;
    margin-top: 15px;
    transition: all 0.6s cubic-bezier(0, 1, 0, 1);
  }
  .faq_accordion_ativo {
    height: auto;
    max-height: 999px;
    overflow: hidden;
    margin-top: 15px;
    font-size: 1.225rem;
    transition: all 0.6s cubic-bezier(1, 0, 1, 0);
  }
  .faq_accordion_pergunta_ativo {
    color: ${({ theme }) => theme.colors.RedQatar};
  }
  > div {
    border-radius: 6px;
    padding: 35px 35px 20px 35px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.colors.bgColor};
    box-shadow: 3px 3px 3px rgba(60, 57, 57, 0.2);

    > div:first-child {
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: space-between;
    }
  }
`;
