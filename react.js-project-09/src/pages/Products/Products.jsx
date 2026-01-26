import { useContext } from "react";
import styles from "./Products.module.scss";
import { ProductContextData } from "../../context/ProductContext";

import Loading from "../../components/Loading/Loading";
import Product from "../../components/Product/Product";

const Products = () => {
  const [data, loading] = useContext(ProductContextData);
  console.log(data, loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.Products}>
      {data.map((elem, idx) => {
        return (
          <div key={idx}>
            <Product elem={elem} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
