import React from "react";

//  it contain function (deleteProduct) define in Home.js
//  on button click it will envoke that function and pass the itemId in parameter
export const DeleteProduct = ({ deleteProduct, itemKey }) => {
  return (
    <button
      style={{ padding: "10px" }}
      onClick={(e) => {
        deleteProduct(e.target.value);
      }}
      value={itemKey}
    >
      Delete
    </button>
  );
};
