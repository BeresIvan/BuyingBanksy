import {Table} from 'react-bootstrap';
//passing in an object with the all reviewss key 
export default function index({allReviews}) {
    return (
        <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Rating</th>
      <th>Comment</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>{allReviews.map((reviews, i)=>
  <tr key={i}>
  <td>{reviews.ratingValue}</td>
  <td>{reviews.comment}</td>
  <td>{reviews.date}</td>
</tr>
  )}
    
   </tbody>
</Table>
            
        </div>
    )
}

