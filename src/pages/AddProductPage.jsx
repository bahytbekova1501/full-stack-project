import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";

function AddProductPage() {
  const { addProduct } = useProductContext();
  const [formValue, setFormValue] = useState({
    name: "",
    image: "",
    price: "",
  });
  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.name.trim() ||
      !formValue.image.trim() ||
      !formValue.price.trim()
    ) {
      alert("zapolnite");
      return;
    }
    addProduct(formValue);
    setFormValue({
      name: "",
      image: "",
      price: "",
    });
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>add product</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
        <TextField
          onChange={(e) => handleChange(e)}
          value={formValue.title}
          label="name"
          name="name"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          value={formValue.description}
          label="image"
          name="image"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          value={formValue.price}
          label="price"
          name="price"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          add
        </Button>
      </form>
    </div>
  );
}

export default AddProductPage;
