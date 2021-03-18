import {Card} from "react-bootstrap";
 
function ReviewCard(props){
  return (
<Card style={{width:"100%", height: "auto"}}>
 <Card.Header>Rating:{props.rating}</Card.Header>
 <Card.Body>
   <blockquote className="blockquote mb-0">
     <p>
       {' '}
       </p>{props.comment}
     <footer className="blockquote-footer">
     </footer>{props.date}
   </blockquote>
 </Card.Body>
</Card>
  )
}
export default ReviewCard;