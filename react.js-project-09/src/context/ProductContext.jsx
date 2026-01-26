import { createContext, useEffect, useState } from "react";
import { getApiData } from "../api/apiData.js";
export const ProductContextData = createContext();

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      try {
        setData(await getApiData());
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <ProductContextData.Provider value={[data, loading]}>
      {children}
    </ProductContextData.Provider>
  );
};

export default ProductContext;
