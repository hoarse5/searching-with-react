import React, { useState } from "react";
import ItemDetails from "./ItemDetails";

function ListItem({ item }) {
  const [shown, setShown] = useState(false);

  return (
    <div className="card-container">
      <h3>{item.name}</h3>
      <div className="details">
        {item && shown === item.id ? <ItemDetails item={item} /> : ""}
      </div>
      <button onClick={() => setShown(shown === false ? item.id : false)}>
        {shown === item.id ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default ListItem;
