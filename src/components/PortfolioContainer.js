import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, onSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      {portfolioStocks.map(stock => (
        <Stock 
          key={stock.id}
          id={stock.id}
          name={stock.name}
          price={stock.price}
          ticker={stock.ticker}
          type={stock.type}
          onSell={onSell}
          container="portfolio"
           />
      ))}
    </div>
  );
}

export default PortfolioContainer;
