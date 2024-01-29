import styled from 'styled-components';

export const LogoutBox = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  & p {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 24px;
    background-image: linear-gradient(to top, darkred, red);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  & button {
    text-transform: uppercase;
    font-size: 18px;
    padding: 7px;
    border-radius: 5px;
    background-color: #ed2939;
    color: white;
    font-weight: 600;
    &:is(:focus, :hover) {
      color: white;
      background-color: #b11226;
    }
  }
`;
