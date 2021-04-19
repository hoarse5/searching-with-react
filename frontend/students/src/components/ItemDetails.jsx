import React from "react";

function ItemDetails({ item }) {
  return (
    <div className="item-details">
      <p>age: {item.age}</p>
      <p>study field: {item.subject}</p>
      <p>gender: {item.gender}</p>
      <p>active: {item.status}</p>
    </div>
  );
}

export default ItemDetails;
