import React from "react";

function Stock({ id, name, type, price, ticker, onBuy, onSell, container }) {

  function handleBuy(){
    onBuy(id)
  }

  function handleSell(){
    onSell(id)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" onClick={container === "portfolio" ? handleSell : handleBuy}>{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
