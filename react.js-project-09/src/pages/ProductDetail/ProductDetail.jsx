import  { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContextData } from "../../context/ProductContext";
import Loading from "../../components/Loading/Loading";
import SelectedProduct from "../../components/SelectedProduct/SelectedProduct";
import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const { id } = useParams();

  const [data, loading] = useContext(ProductContextData);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.productDetail}>
      <SelectedProduct elem={data[id -1]} />
    </div>
  );
};

export default ProductDetail;
