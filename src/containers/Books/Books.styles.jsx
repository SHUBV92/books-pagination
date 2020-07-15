import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  padding: 100px;
  width: 100%;
  z-index: 4;
  background-color: #1d7874;
  color: white;
  position: fixed;
  box-shadow: 0 4px 8px 0 rgba(0, 1, 0, 0.2);

  h1 {
    padding-left: 30vw;
  }
`;

export const Buttons = styled.div`
  padding: 10px;
  padding-top: 270px;
  padding-left: 40vw;
  position: fixed;
  z-index: 2;
  background-color: slategrey;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 1, 0, 0.2);
  border-radius: 8px;
`;
export const Button = styled.button`
  border-radius: 10px;
  background-color: white;
`;

export const Cards = styled.div`
  padding-top: 500px;
`;
