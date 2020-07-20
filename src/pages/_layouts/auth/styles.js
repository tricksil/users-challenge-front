import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(125.42deg, #35312b 0%, #4d4941 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: linear-gradient(130.07deg, #cba958 29.58%, #ffeca1 98.75%);
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  text-align: center;

  img {
    margin-top: 64px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 64px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 32px 16px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 32px 16px;
      font-weight: bold;
    }

    button {
      margin: 0 32px 16px;
      height: 44px;
      background: #4b6db8;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.03, '#4b6db8')};
      }
    }

    a {
      color: #35312b;
      font-size: 16px;
      margin-bottom: 32px;
      opacity: 1;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
