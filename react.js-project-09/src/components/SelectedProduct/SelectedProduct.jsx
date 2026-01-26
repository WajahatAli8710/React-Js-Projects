import styles from "./SelectedProduct.module.scss";

const SelectedProduct = ({ elem }) => {
  //   const {
  //   title,
  //   id,
  //   category,
  //   price,
  //   image,
  //   rating: { rate, count },
  // } = elem || {};

  console.log(elem);

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={elem.image} alt="" />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{elem.title}</h2>
        <p className={styles.price}>RS. {elem.price}</p>
        <p className={styles.category}>{elem.category}</p>{" "}
        <p className={styles.rating}>
          ⭐{elem.rate} ({elem.count} reviews)
        </p>
      </div>
    </div>
  );
};

export default SelectedProduct;
