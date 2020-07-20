import styled from 'styled-components';
import { darken } from 'polished';

import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  max-width: 900px;
  margin: 32px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0px 15px;

    h2 {
      color: #dbd3c5;
      font-size: 32px;
    }

    button {
      text-align: right;
      margin: 5px 0 0;
      padding: 0 15px 0 50px;
      border: 0;
      background: #4b6db8;
      height: 42px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background: ${darken(0.06, '#4B6DB8')};
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
  }
`;

export const Event = styled.li`
  background: #dbd3c5;
  list-style: none;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &:last-child {
    margin-bottom: 0px;
  }

  p {
    color: #26211b;
    font-size: 18px;
    font-weight: bold;
  }

  time {
    font-size: 16px;
    color: #26211b;
    text-align: right;
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 340px;
  padding: 0px 15px;
  margin-top: 32px;
  margin-bottom: 32px;
`;
