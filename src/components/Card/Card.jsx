import { CardMedia } from "@mui/material";
import React from "react";
import "./Card.css";
function Card({ item }) {
  return (
    <div class="card" style={{ marginTop: "250px", marginBottom: "90px" }}>
      <div>
        <img
          src={item.image}
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "17px",
          }}></img>
        {/* <CardMedia
          component="img"
          alt="gigachad "
          height="300"
          width="400"
          image={item.image}
        /> */}
      </div>
    </div>
  );
}

export default Card;
