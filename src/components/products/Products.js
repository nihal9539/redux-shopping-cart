import React from "react";
import Product from "../product/Product.js";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL: "https://www.lenovo.com/medias/Yoga-7-Gen-6-14-AMD-3.jpg?context=bWFzdGVyfGltYWdlc3wzMDQ4MHxpbWFnZS9qcGVnfGltYWdlcy9oZmMvaGM4LzEzNDQyNzI4OTE5MDcwLmpwZ3w5MDVmOTUyMzM0M2JjMWQwZTZmNzIxZGY4NTk1YWZlMTE2ZTBkMzNlMGY2YzhlYmRlMDJiYTgzZDJiZDUwOTc0",
    price: 25,
  },
  {
    id: 3,
    name: "Dell latitude",
    imgURL: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-15-5540-laptop/media-gallery/notebook-latitude-15-5540-t-ir-silver-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=649&qlt=100,1&resMode=sharp2&size=649,402&chrss=full", price: 25,
  },
  {
    id: 4,
    name: "HP Pavilion",
    imgURL:
      "https://rukminim1.flixcart.com/image/850/1000/xif0q/computer/8/w/l/-original-imagp8xzbrgfm6gv.jpeg?q=90",
    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://m.media-amazon.com/images/I/71JTqwnGm0L.jpg",
    price: 25,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
