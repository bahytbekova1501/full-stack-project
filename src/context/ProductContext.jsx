import React, { createContext, useContext } from "react";

const productContext = createContext();
export function useProductContext() {
  useContext(productContext);
}
function ProductContext({ children }) {
  const value = {};
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
