import React from "react";
import { useSelector } from "react-redux";
import UpdateQuantity from "./UpdateQuantity";
import RemoveProduct from "./RemoveProduct";

const InventoryList = () => {
  const products = useSelector((state) => state.inventory.products);

  return (
    <div>
      <h1>Inventory List</h1>
      {products.length === 0 ? (
        <p>No products in inventory.</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              marginBottom: "10px",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            <strong>{product.name}</strong> (Quantity: {product.quantity})
            <UpdateQuantity id={product.id} currentQuantity={product.quantity} />
            <RemoveProduct id={product.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default InventoryList;
