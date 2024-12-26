import { removeProduct } from "./state/slice";
import { useDispatch } from "react-redux";

const RemoveProduct = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProduct(id));
  };

  return (
    <button onClick={handleRemove} style={{ marginLeft: "10px" }}>
      Remove
    </button>
  );
}
export default RemoveProduct;