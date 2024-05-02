import React, { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const api_url = "https://dummyjson.com/products";
  let [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        console.log("Axios Resolved: ", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      });
  }, [setState, api_url]);

  return (
    <div>
      <h1>All Products</h1>
      {state.map((prod) => (
        <div>
          <h3>{prod.products}</h3>
        </div>
      ))}
    </div>
  );
};

export default Shop;
