import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "./state/slice";

const UpdateQuantity = ({ id, currentQuantity }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(currentQuantity || 0);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{ width: "50px", marginRight: "10px" }}
      />
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default UpdateQuantity;
