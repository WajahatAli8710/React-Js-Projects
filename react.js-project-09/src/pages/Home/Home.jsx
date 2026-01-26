import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Explore Product
      </button>
    </div>
  );
};

export default Home;
