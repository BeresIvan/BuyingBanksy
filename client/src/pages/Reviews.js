import React, {useEffect, useState} from "react";
import {Button, Modal} from 'react-bootstrap';
import API from "../utils/API.js";
import ReviewCard from "../components/ReviewCard";
import "../pages/css/reviews.css";
import { List } from "../components/List";
// import Carousel from 'react-bootstrap/Carousel';
// import Products from "../products.json";


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
      <h1 className="title text-center">Leave us a Review</h1>
      </section>
      <Button variant="primary" onClick={handleShow}>
        Add Review
      </Button>

  {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Products[3].image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Love my new artwork!</h3>
      <p>Review submitted by Jackie G</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Products[4].image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Bought this wonderful piece. It now is in my living room. This site is great and the service too! </h3>
      <p>Review submitted by Ivan B</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Products[8].image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Tell all your friends that BuyingBanksy is the best art shop.</h3>
      <p>Review submitted by Brian</p>
    </Carousel.Caption>
  </Carousel.Item>  
</Carousel> */}

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
          placeholder="username optional"
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
