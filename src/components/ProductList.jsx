import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
//   import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import Card from "./Card/Card";
//   import { LIMIT } from "../utils/consts";
// import ProductCard from "./ProductCard";

function ProductsList() {
  const { products, getProducts, pageTotalCount } = useProductContext();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [inputVal, setInputVal] = useState(
  //   searchParams.get("title_like") || ""
  // );
  // const [category, setCategory] = useState(
  //   searchParams.get("category") || "all"
  // );
  // const [page, setPage] = useState(+searchParams.get("_page") || 1);

  useEffect(() => {
    getProducts();
  }, []);

  // const [firstMount, setFirstMount] = useState(true);
  // useEffect(() => {
  //   if (firstMount) {
  //     setFirstMount(false);
  //     return;
  //   }
  //   if (category === "all") {
  //     setSearchParams({
  //       title_like: inputVal,
  //       _limit: LIMIT,
  //       _page: 1,
  //     });
  //   } else {
  //     setSearchParams({
  //       title_like: inputVal,
  //       category: category,
  //       _limit: LIMIT,
  //       _page: 1,
  //     });
  //   }
  //   setPage(1);
  // }, [inputVal, category]);

  // useEffect(() => {
  //   if (category === "all") {
  //     setSearchParams({
  //       title_like: inputVal,
  //       _limit: LIMIT,
  //       _page: page,
  //     });
  //   } else {
  //     setSearchParams({
  //       title_like: inputVal,
  //       category: category,
  //       _limit: LIMIT,
  //       _page: page,
  //     });
  //   }
  // }, [page]);

  // useEffect(() => {
  //   if (pageTotalCount < page) {
  //     setPage(pageTotalCount);
  //   }
  // }, [pageTotalCount]);

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </Grid>
      {/* <Pagination
          onChange={(e, p) => setPage(p)}
          page={page}
          count={pageTotalCount}
          color="primary"
        /> */}
    </div>
  );
}

export default ProductsList;
