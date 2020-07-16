import styled from "styled-components";

export const Container = styled.div`
  .card {
    padding: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 30px;
    h1 {
      background-color: #1d7874;
      color: white;
    }
    p {
      align-items: center;
    }
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  padding: 2px 16px;
`;
