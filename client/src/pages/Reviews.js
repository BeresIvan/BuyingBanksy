 import React, { useState} from "react";
import {Button, Modal} from 'react-bootstrap';
//import Table from "../components/Table";
import API from "../utils/API.js";
import ReviewCard from "../components/ReviewCard";
import {allReviews} from "../reviews.json";
import "./reviews.css";

 function Reviews() {
  const [show, setShow] = useState(false);
  const [formObject, setFormObject] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const inputRef = useRef();

  // useEffect(() => {
  //   loadReviews()
  // }, [])

  // function loadReviews() {
  //   API.getBooks()
  //     .then(res => 
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };
  
  function handleInputChange(event) {
    const {name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (formObject.comment) {
      API.saveReview({
       comment: formObject.comment
      })
        //.then(res => loadReviews())
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };



  return (
   <div class="reviewBody">
     <>
      <Button variant="primary" onClick={handleShow}>
        Add Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rating{" "}  
          <input type= "radio" value= "5">
            </input>
            <input type= "radio" value= "4">
            </input>
            <input type= "radio" value= "3">
            </input>
            <input type= "radio" value= "2">
            </input>
            <input type= "radio" value= "1">
            </input>
          </Modal.Title>                 
        </Modal.Header>
        <Modal.Body>
        
   
        <div class="comment-area"> <textarea onChange={handleInputChange} name= "comment" value={formObject.comment} class="form-control" placeholder="How was your experience with Buying Banksy?" rows="4"></textarea> </div>

 
          
          
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>


        
          <Button variant="primary"  disabled={!(formObject.comment)} onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <ReviewCard
    comment={allReviews[0].comment}
    rating={allReviews[0].ratingValue}
    date={allReviews[0].date}>
    </ReviewCard>

    <ReviewCard
    comment={allReviews[1].comment}
    rating={allReviews[1].ratingValue}
    date={allReviews[1].date}>
    </ReviewCard>

    <ReviewCard
    comment={allReviews[2].comment}
    rating={allReviews[2].ratingValue}
    date={allReviews[2].date}>
    </ReviewCard>



    {/* <Table allReviews ={allReviews} >
    </Table> */}
    
   </div>
  );
}

export default Reviews;
