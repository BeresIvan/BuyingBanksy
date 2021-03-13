import React,{ Component } from "react";
//import ProductCard from "../components/ProductCard";
import Wrapper from "../components/Wrapper";
//import Products from "../products.json"; 

class Home extends Component {

  // Setting json array
  // state = {
  //   Products
  // };

  // Map over this.state.products and render a Product component for each product object
  render() {
    return (
    <div>
        <Wrapper>
        {/* {this.state.Products.map(Products => (
          <ProductCard
            title={Products.title}
            description={Products.description}
            price={Products.price}
          />
        ))} */}
      </Wrapper>
    </div>
    );
  }
}



export default Home;





