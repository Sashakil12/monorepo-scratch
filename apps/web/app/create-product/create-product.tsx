import React from "react";
import createProduct from "./actions/create-product"
function CreateProduct() {
  return (
    <div>
      <form action={createProduct}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name"></input>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price"></input>
        </div>
        <button type="submit"> Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
