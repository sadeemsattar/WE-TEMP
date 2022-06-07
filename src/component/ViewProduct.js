import React from "react";
import { DeleteProduct } from "./DeleteProduct";
import { EditProduct } from "./EditProduct";
import "./ViewProduct.css";

// contain two nested componenet
//  1) Edit Product
//  2) Delete Product
//  pass item id in both componenet as parameter

export const ViewProduct = (props) => {
  const { itemList, deleteProduct, editProduct } = props;
  return (
    <>
      <div className="container">
        <table border="1" className="tableSize">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>

          {itemList
            ? itemList.map((item) => (
                <tr key={item.Id}>
                  <td>{item.Id}</td>
                  <td>{item.Title}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.Size}</td>
                  <td>{item.Price}</td>
                  <td>
                    <DeleteProduct
                      deleteProduct={deleteProduct}
                      itemKey={item.Id}
                    />
                    <EditProduct editProduct={editProduct} itemKey={item.Id} />
                  </td>
                </tr>
              ))
            : "not"}
        </table>
      </div>
    </>
  );
};
