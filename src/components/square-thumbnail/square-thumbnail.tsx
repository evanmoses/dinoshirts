import { SquareThumbWrapper } from "./square-thumbnail.styles";

import placeholder from "@images/shirt-placeholder.png";

const SquareThumb = () => {
  return (
    <SquareThumbWrapper>
      <img src={placeholder} />
    </SquareThumbWrapper>
  );
};

export default SquareThumb;
