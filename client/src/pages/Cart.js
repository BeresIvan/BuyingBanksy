import React,{ Component } from "react";


class Cart extends Component {

 
  render() {

    function handleShow(){
      const [show, setShow] = useState(false);
      const [formObject, setFormObject] = useState({});
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
     }


    return (
      <main>
      <section>
      <h1 className="title text-center">Ready To Checkout?</h1>
      </section>
      <section>
        <div className="spacer">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-9">
                <div className="row shop-listing">
                  <table className="table shop-table">
                    <tr>
                      <th className="b-0">Name</th>
                      <th className="b-0">Price</th>
                      <th className="b-0">Quantity</th>
                      <th className="b-0"></th>
                    </tr>
                    
                      <tr>
                        <td>Product1</td>
                        <td>$1000.0</td>
                        <td>
                          <button
                            // onClick={(e) => increaseQty(item.productId._id)}
                            className="btn btn-primary btn-sm"
                          >
                            +
                          </button>
                          1
                          <button className="btn btn-primary btn-sm">-</button>
                        </td>
                      </tr>
                  
                    <tr>
                      <td colspan="3" align="right">
                        Subtotal : $1000.00
                      </td>
                      <td colspan="4" align="right">
                        <button
                          className="btn btn-primary"
                          onClick={handleShow}
                        >
                          Pay
                          {/* <Link
              to="/payment"
              className={
                window.location.pathname === "/" || window.location.pathname === "/payment"}
            >payment</Link> */}
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </section>
    </main>
    
    );
  }
}



export default Cart;