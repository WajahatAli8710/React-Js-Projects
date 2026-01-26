import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
const Product = ({ elem }) => {
  const {
    title,
    id,
    category,
    price,
    image,
    rating: { rate, count },
  } = elem || {};


  return (
 <Link to={`/products/${id}`}>
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={image} alt="Product Image" />
      </div>
      <div className={styles.dets}>
        <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>RS. {price}</p>
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>{" "}
        <p className={styles.rating}>⭐{rate} ({count} reviews)</p>
      </div>
      </div>
    </div></Link>
  );
};

export default Product;
