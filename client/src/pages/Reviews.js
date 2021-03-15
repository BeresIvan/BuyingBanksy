/* eslint-disable no-unused-vars */
import React, { useReducer, useRef } from "react";
import {Button} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import Table from "./components/Table";
import {allReviews} from "../../../models/reviewmodeles";
import "./App.css";

console.log(allReviews);

function Reviews() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length * Math.random(),
          name: action.name
        }
      ];
    }
  }, []);

    
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  };



  return (
   <div>

     <Button>
       Add a review
     </Button>

     <DropdownButton id="dropdown-basic-button" title="Sort Reviews">
          <Dropdown.Item href="#/action-1">Ratings 5-1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Ratings 1-5</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Date</Dropdown.Item>
        </DropdownButton>

     <Button>
       Add a star
     </Button>

     <div>
     <i class="fa fa-star fa-lg"></i>
    <i class="fa fa-star fa-lg"></i>
    <i class="fa fa-star fa-lg"></i>
    <i class="fa fa-star fa-lg"></i>
    <i class="fa fa-star fa-lg"></i>

     </div>

     <form className="form-group mt-5" onSubmit={handleSubmit}>
     <input
          className="form-control"
          ref={inputRef}
          placeholder="Review Title"
        />
        <input
          className="form-control"
          ref={inputRef}
          placeholder="How was your experience with Buying Banksy?"
        />

        <DropdownButton id="dropdown-basic-button" title="Category">
          <Dropdown.Item href="#/action-1">Website</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Quality</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shipping</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Other</Dropdown.Item>
        </DropdownButton>
        
         <button className="btn btn-success mt-3 mb-5">
          Add an image
          </button>

          <button className="btn btn-success mt-3 mb-5" type="submit">
          Submit Review
          </button>
      
        </form>

        <Table allReviews ={allReviews} >
    </Table>
     
   </div>
  );
}

export default Reviews;

/*
const reviewModle = require("../models/allReviews");
router.post("/review", async (request, response) => {

  const reviewEntered = new reviewModels({
    rating: request.body.rating,
    category: request.body.category,
    reviewTitle: request.body.reviewTitle,
    comment: request.body.comment,
    reviewIMG: request.body.reviewIMG
  });
  reviewEntered
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

*/