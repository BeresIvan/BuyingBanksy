import React from "react";
import "./style.css";

function Table(props) {
  return (
    <div className="card">
      <div className="img-container"> 
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title</strong> {props.reviewTitle}
          </li>
          <li>
            <strong>Comment:</strong> {props.comment}
          </li>
          <li>
            <strong>Category:</strong>{props.category}
          </li> 
          <li>
            Date:{props.date}
          </li>
          <li>
            <strong>Rating:</strong> ${props.rating}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Table;