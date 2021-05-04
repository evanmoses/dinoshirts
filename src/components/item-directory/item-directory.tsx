import { useState } from "react";
import styled from "styled-components/macro";

import SquareThumb from "../square-thumbnail";

function ItemDirectory() {
  const [itemList, setItemList] = useState([1, 2, 3, 4, 5]);
  return (
    <Wrapper>
      {itemList.map(item => (
        <SquareThumb key={item}>{item}</SquareThumb>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

export default ItemDirectory;
