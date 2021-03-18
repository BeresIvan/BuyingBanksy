import React, {useState} from "react";
import {Button, Dropdown, DropdownButton, Modal} from 'react-bootstrap';
import Table from "../components/Table";
import reviews from "../reviews.json"
import "./reviews.css";


 function Reviews() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <div>
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

            {/* <DropdownButton id="dropdown-basic-button" title="Category">
          <Dropdown.Item href="#/action-1">Website</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Quality</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shipping</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Other</Dropdown.Item>
        </DropdownButton> */}

          </Modal.Title>        
                  
        </Modal.Header>
        <Modal.Body>
        
     <input
          className="form-control"
          //ref={inputRef}
          placeholder="Review Title"
        />
        <div class="comment-area"> <textarea class="form-control" placeholder="How was your experience with Buying Banksy?" rows="4"></textarea> </div>

 
          
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>


        
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
 
   



     <DropdownButton id="dropdown-basic-button" title="Sort Reviews">
          <Dropdown.Item href="#/action-1">Ratings 5-1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Ratings 1-5</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Date</Dropdown.Item>
        </DropdownButton>








     
        
        <Table
        title={reviews[0].reviewTitle}
        comment={reviews[0].commment}
        category={reviews[0].category}
        rating={reviews[0].rating}
        date={reviews[0].date}
        
        />

           
   </div>
  );
}

export default Reviews;
