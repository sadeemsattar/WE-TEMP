import React from "react";

//  it contain function (editProduct) define in Home.js
//  on button click it will envoke that function and pass the itemId in parameter
export const EditProduct = ({ editProduct, itemKey }) => {
  return (
    <button
      style={{ padding: "10px" }}
      onClick={(e) => {
        editProduct(e.target.value);
      }}
      value={itemKey}
    >
      Edit
    </button>
  );
};
