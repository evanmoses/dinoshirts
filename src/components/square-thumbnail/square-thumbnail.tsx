import "./square-thumbnail.scoped.sass";
import placeholder from "../../images/shirt-placeholder.png";

function SquareThumb() {
  return (
    <div className="thumb">
      <img src={placeholder} />
    </div>
  );
}

export default SquareThumb;
