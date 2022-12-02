import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const GroupsContent = styled(motion.div)`
  overflow: hidden;
  cursor: grab;
`;

export const Groups = styled(motion.div)`
  display: flex;
  gap: 0px 32px;
  > ul {
    background-color: ${({ theme }) => theme.colors.bgColor};
    margin-bottom: 48px;
    border-radius: 6px;
    width: 384px;
    box-shadow: 3px 3px 3px rgba(60, 57, 57, 0.2);

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

      > img {
        -webkit-user-drag: none;
      }

      &:first-child {
        font-weight: 600;
        justify-content: center;
        padding: 32px 0 45px 0;
      }
    }
  }

  @media (max-width: 600px) {
    gap: 0px 10px;
    > ul {
      width: 320px;
      > li {
        font-size: 1.3rem;
        > img {
          width: 61px;
          height: 40px;
        }
      }
    }
  }
`;
