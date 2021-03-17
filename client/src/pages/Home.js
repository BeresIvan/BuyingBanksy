import React from "react";
import ProductCard from "../components/ProductCard";
import Wrapper from "../components/Wrapper";
import Products from "../products.json";


function Home() {
  return(
    <Wrapper>
        <ProductCard
        image={Products[0].image}
        artist={Products[0].artist}
        title={Products[0].title}
        classification={Products[0].classification}
        meduim={Products[0].meduim}
        date={Products[0].date}
        price={Products[0].price}
        />

        <ProductCard
        image={Products[1].image}
        title={Products[1].title}
        artist={Products[1].artist}
        classification={Products[1].classification}
        meduim={Products[1].meduim}
        date={Products[1].date}
        price={Products[1].price}
        />        

        <ProductCard
        image={Products[2].image}
        title={Products[2].title}
        artist={Products[2].artist}
        classification={Products[2].classification}
        meduim={Products[2].meduim}
        date={Products[2].date}
        price={Products[2].price}
        />

        <ProductCard
        image={Products[3].image}
        title={Products[3].title}
        artist={Products[3].artist}
        classification={Products[3].classification}
        meduim={Products[3].meduim}
        date={Products[3].date}
        price={Products[3].price}
        />

        <ProductCard
        image={Products[4].image}
        title={Products[4].title}
        artist={Products[4].artist}
        classification={Products[4].classification}
        meduim={Products[4].meduim}
        date={Products[4].date}
        price={Products[4].price}
        />

        <ProductCard
        image={Products[5].image}
        title={Products[5].title}
        artist={Products[5].artist}
        classification={Products[5].classification}
        meduim={Products[5].meduim}
        date={Products[5].date}
        price={Products[5].price}
        />

        <ProductCard
        image={Products[6].image}
        title={Products[6].title}
        artist={Products[6].artist}
        classification={Products[6].classification}
        meduim={Products[6].meduim}
        date={Products[6].date}
        price={Products[6].price}
        />

        <ProductCard
        image={Products[7].image}
        title={Products[7].title}
        artist={Products[7].artist}
        classification={Products[7].classification}
        meduim={Products[7].meduim}
        date={Products[7].date}
        price={Products[7].price}
        />

        <ProductCard
        image={Products[8].image}
        title={Products[8].title}
        artist={Products[8].artist}
        classification={Products[8].classification}
        meduim={Products[8].meduim}
        date={Products[8].date}
        price={Products[8].price}
        />

        <ProductCard
        image={Products[9].image}
        title={Products[9].title}
        artist={Products[9].artist}
        classification={Products[9].classification}
        meduim={Products[9].meduim}
        date={Products[9].date}
        price={Products[9].price}
        />

        <ProductCard
        image={Products[10].image}
        title={Products[10].title}
        artist={Products[10].artist}
        classification={Products[10].classification}
        meduim={Products[10].meduim}
        date={Products[10].date}
        price={Products[10].price}
        />

        <ProductCard
        image={Products[11].image}
        title={Products[11].title}
        artist={Products[11].artist}
        classification={Products[11].classification}
        meduim={Products[11].meduim}
        date={Products[11].date}
        price={Products[11].price}
        />

    </Wrapper>
  )
}



export default Home;





