import styled from "styled-components/macro";

export const SquareThumbWrapper = styled.section`
  height: 250px;
  width: 250px;
  border: solid 1px black;
  margin: 10px;
  overflow: hidden;

  img {
    height: 250px;
    width: 250px;
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover {
    cursor: pointer;
    img {
      transform: scale(2);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
`;
