import React,{ Component } from "react";


class Cart extends Component {

 
  render() {

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
                      <a href="/payment">
                        <button
                          className="btn btn-primary"
                           >
                          Pay
                        </button>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    );
  }
}



export default Cart;