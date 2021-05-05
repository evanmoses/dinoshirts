import { useState } from "react";

import SquareThumb from "../square-thumbnail";

import { ItemDirWrapper } from "./item-directory.styles";

function ItemDirectory() {
  const [itemList, setItemList] = useState([1, 2, 3, 4, 5]);
  return (
    <ItemDirWrapper>
      {itemList.map(item => (
        <SquareThumb key={item}>{item}</SquareThumb>
      ))}
    </ItemDirWrapper>
  );
}

export default ItemDirectory;
