import Carousel from "./Carousel";
import Grid from "./Grid";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((result) => result.data)
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Carousel />
      <div>
        <Grid products={products} />
      </div>
    </div>
  );
};

export default Home;
