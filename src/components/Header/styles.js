import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: linear-gradient(95.82deg, #cba958 0%, #ffeca1 100%);
  padding: 16px 64px;
`;

export const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  strong {
    color: #26211b;
    font-size: 14px;
    font-weight: bold;
  }
  a {
    margin-top: 2px;
    color: #4d4941;
    font-size: 14px;
  }
`;

export const Logout = styled.button`
  border: 0;
  height: 42px;
  border-radius: 4px;
  background: #6b95d1;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  padding: 0 20px;
  margin-left: 16px;
  cursor: pointer;

  &:hover {
    background: ${darken(0.06, '#6B95D1')};
  }
`;
