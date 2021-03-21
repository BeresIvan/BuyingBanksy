import {Card} from "react-bootstrap";
import "./reviewCards.css";

function ReviewCard({children}){
  return (
<Card id="reviewCard" style={{margin:"4%", width:"90%", height: "auto"}}>
 {/* <Card.Header>Rating:{review.date}</Card.Header> */}
 <Card.Body id="cardBody">
   <blockquote className="blockquote mb-0">
     <p>
       {' '}
       </p>{children}
   </blockquote>
 </Card.Body>
</Card>
  )
}
export default ReviewCard;

//style={{width:"90%", height: "auto", padding: "20px"}}