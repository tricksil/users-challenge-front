import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 64px auto;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  h2 {
    color: #dbd3c5;
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

export const Content = styled.div`
  background: linear-gradient(130.07deg, #cba958 29.58%, #ffeca1 98.75%);
  border-radius: 4px;
  padding: 8px 8px;

  form {
    display: flex;
    flex-direction: column;

    input {
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      font-size: 18px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin-bottom: 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(77, 73, 65, 0.5);
      margin: 10px 0 20px;
    }

    > button {
      align-self: flex-end;
      text-align: right;
      margin: 5px 0 0;
      padding: 0 15px 0 50px;
      border: 0;
      background: #6b95d1;
      height: 42px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#6b95d1')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const GroupButton = styled.div`
  align-self: flex-end;

  button {
    text-align: right;
    margin: 5px 0 0;
    padding: 0 15px 0 50px;
    border: 0;
    background: #6b95d1;
    height: 42px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      background: ${darken(0.06, '#6b95d1')};
    }
  }

  button:nth-child(2) {
    background: #f94d6a;
    margin-left: 15px;

    &:hover {
      background: ${darken(0.06, '#f94d6a')};
    }
  }
`;
