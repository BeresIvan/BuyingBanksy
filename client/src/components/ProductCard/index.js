import React from "react";
import "./style.css";

function ProductCard(props) {
  return (
    <div className="card">
      <div className="img-container"> 
      <img alt={props.title} src={props.image}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
          <li>
            <strong>Artist:</strong> {props.artist}
          </li>
          <li>
            <strong>Descripton:</strong>
          </li> 
          <li>
            Classification:{props.classification},
            Meduim:{props.meduim},
            Date:{props.date}
          </li>
          <li>
            <strong>Price:</strong> ${props.price}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;