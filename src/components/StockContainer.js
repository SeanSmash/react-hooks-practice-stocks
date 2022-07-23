import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, onBuy }) {
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stockList.map(stock => (
        <Stock 
          key={stock.id}
          id={stock.id}
          name={stock.name}
          price={stock.price}
          ticker={stock.ticker}
          type={stock.type}
          onBuy={onBuy}
          container="stocks" />
      ))}
    </div>
  );
}

export default StockContainer;
