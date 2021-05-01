import { useState } from "react";
import "./item-directory.sass";

import SquareThumb from "../square-thumbnail";

function ItemDirectory() {
  const [itemList, setItemList] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="container">
      {itemList.map(item => (
        <SquareThumb key={item}>{item}</SquareThumb>
      ))}
    </div>
  );
}

export default ItemDirectory;
