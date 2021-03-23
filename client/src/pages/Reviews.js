import React, {useEffect, useState} from "react";
import {Button, Modal} from 'react-bootstrap';
import API from "../utils/API.js";
import ReviewCard from "../components/ReviewCard";
import "../pages/css/reviews.css";
import { List } from "../components/List";

 function Reviews() {
  const [show, setShow] = useState(false);
  const [formObject, setFormObject] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reviews, setReviews] =useState([])
  //const inputRef = useRef();

  useEffect(() => {
    loadReviews()
  }, [])

  function loadReviews() {
     API.getReviews()
      .then(res => 
        setReviews(res.data)
      )
      .catch(err => console.log(err));
  };
  
  function handleInputChange(event) {
    const {name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (formObject.comment && formObject.rating && formObject.user) {
      API.saveReview({
       comment: formObject.comment,
       rating:formObject.rating,
       user:formObject.user
      })
        .then(res => loadReviews())
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  return (
   <div class="reviewBody">
     <>
     <section>
      <h1 className="title text-center">Leave us a Review
      </h1>
      <Button className= "reviewBtn" variant="primary" onClick={handleShow}>
        Add Review
      </Button>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{" "}
          <textarea 
          onChange={handleInputChange} 
          name= "rating" value={formObject.rating} 
          class="form-control" 
          placeholder="Rate from 1-5" 
          rows="1">
          </textarea>


       
          </Modal.Title>                 
        </Modal.Header>
        <Modal.Body>
        
         <div class="comment-area">
          <textarea onChange={handleInputChange}
          name= "comment"
          value={formObject.comment}
          class="form-control" 
          placeholder="How was your experience with Buying Banksy?"
          rows="4">
          </textarea>
          
          <textarea id="userBox"
          onChange={handleInputChange}
          name= "user"
          value={formObject.user}
          class="form-control" 
          placeholder="username"
          rows="1">
          </textarea>
        </div>
          </Modal.Body>
          <Modal.Footer>
                    
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary"  disabled={!(formObject.comment && formObject.rating && formObject.user)} onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    <List>
   {reviews.map(review => (
   <ReviewCard key={review._id}>
     <h2>Rating:{review.rating}</h2>
     <strong>
    {review.comment}
   </strong>
   <p>{review.user}</p>

   </ReviewCard>
    ))}
     </List>


     

    
   </div>
  );
}

export default Reviews;
