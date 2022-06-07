import React, { useEffect, useState } from "react";
import "./AddProduct.css";
export const AddProduct = ({ addProduct, itemObject, btnText, setBtnText }) => {
  const [title, setTitle] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    // create new object
    let newProduct = {
      Title: title,
      Quantity: quantity,
      Size: size,
      Price: price,
    };

    // pass this object in addProduct function define in Home.js
    addProduct(newProduct);

    setTitle("");
    setPrice("");
    setQuantity("");
    setSize("");
  };

  // here check if itemObject contain any object means we need to update the data
  // thats why set all value in useState
  // and set these value in foam by default
  useEffect(() => {
    if (itemObject.length > 0) {
      setSize(itemObject[0].Size);
      setTitle(itemObject[0].Title);
      setQuantity(itemObject[0].Quantity);
      setPrice(itemObject[0].Price);
      setBtnText("Edit Product");
    }
  }, [itemObject]);

  return (
    <>
      <div className="container">
        <form className="formStyle">
          <div className="heading">
            <h1>Add Product Blog</h1>
          </div>

          <div className="row">
            <label htmlFor="title">Enter Title:</label>
            <input
              id="title"
              type="text"
              placeholder="Enter title here"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <label htmlFor="quantity">Quatity:</label>
            <input
              id="quantity"
              type="number"
              value={parseInt(quantity)}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <label htmlFor="price">Enter Price:</label>
            <input
              type="number"
              id="price"
              value={parseInt(price)}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <label htmlFor="size">Select Size:</label>
            <select
              id="size"
              onChange={(e) => {
                setSize(e.target.value);
              }}
              value={size}
            >
              <option value="" selected disabled hidden>
                Select
              </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>
            </select>
          </div>
          <div className="row">
            <button className="btn" onClick={submitHandler}>
              {btnText}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
