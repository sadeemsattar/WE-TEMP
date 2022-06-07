import React, { useState, useEffect } from "react";
import { AddProduct } from "./AddProduct";
import { ViewProduct } from "./ViewProduct";
import axios from "axios";

//  main componenet
// contain two nested component
// 1) Editt Product
// 2) Add Product

export const Home = () => {
  // use stae list contain all element
  const [itemList, setItemList] = useState([]);

  // this state is update in editProduct Funtion and take the object to be update
  const [itemObject, setItemObject] = useState({});

  // check for the button operation add/update
  const [btnText, setBtnText] = useState("Add Product");

  // function to fetch all data from backend
  const fetchAllProduct = () => {
    fetch("http://localhost/Backend/Get.php")
      .then((response) => response.json())
      .then((data) => {
        setItemList(data.getResult);
        // console.log(data.getResult);
      });
  };

  // function to delete data from backend
  const deleteProduct = async (itemKey) => {
    const result = await axios.post(
      "http://localhost/Backend/Delete.php",
      itemKey
    );
    if (result) {
      fetchAllProduct();
    }
  };

  // function to add data to backend contain product as an argmenet this product is recieve during function call
  const addProduct = async (product) => {
    product.Quantity = parseInt(product.Quantity);
    product.Price = parseInt(product.Price);

    // check for the data is for update or simply add type
    if (btnText === "Add Product") {
      product = JSON.stringify(product);
      const result = await axios.post(
        "http://localhost/Backend/Add.php",
        product
      );
      if (result) {
        // console.log(result);
        fetchAllProduct();
      }
    } else {
      product.Id = parseInt(itemObject[0].Id);
      console.log(product);
      product = JSON.stringify(product);

      const result = await axios.post(
        "http://localhost/Backend/EditFile.php",
        product
      );
      if (result) {
        // console.log(result);
        fetchAllProduct();
      }
      setBtnText("Add Product");
    }
  };

  // function to get product from itemList through its index and save it in itemObject useState
  const editProduct = (itemIndex) => {
    const itemObj = itemList.filter((item) => {
      if (item.Id == itemIndex) return item;
    });

    setItemObject(itemObj);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <>
      <AddProduct
        addProduct={addProduct}
        itemObject={itemObject}
        btnText={btnText}
        setBtnText={setBtnText}
      />
      <ViewProduct
        itemList={itemList}
        setItemList={setItemList}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    </>
  );
};
