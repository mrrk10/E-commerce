import React, { useEffect, useState } from "react";
import '../../App.css';
const Product = () => {
  const [productData, setproductData] = useState([]);
  const baseDict = "http://localhost:5000/uploads";
  const fetchImg = async () => {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    // console.log(typeof data);
    console.log(data)
    setproductData(data);
  };
  useEffect(() => {
    fetchImg();
  }, []);
 
  return (
    <>
    <div className="product-main-div"  style={{display:"grid",gap:"20px",gridTemplateColumns:"277px 277px 277px  "}}  >
      {productData &&
        productData.map((each) => {
          return (
            <div className="allProduct" key={each._id}>
              <h1>{each.title}</h1>
              <img src={baseDict + each.image} alt="image not loaded" />
              <p>{each.description}</p>
            </div>
          );
        })}
        </div>
    </>
  );
};

export default Product;
