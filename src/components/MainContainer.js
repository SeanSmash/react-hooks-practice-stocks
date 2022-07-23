import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([]) 
  const [portfolioStocks, setPortfolioStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => setStockList(data))
  }, [])

  function handleBuy(id){
    const boughtStock = stockList.filter(stock => (stock.id === id ? stock : null))
    setPortfolioStocks([...portfolioStocks, boughtStock[0]])
    const unBoughtStocks = stockList.filter(stock => (stock.id !== id ? stock : null))
    setStockList(unBoughtStocks)
  }

  function handleSell(id){
    const keptStocks = portfolioStocks.filter(stock => stock.id !== id ? stock : null)
    setPortfolioStocks(keptStocks)
    const soldStock = portfolioStocks.filter(stock => stock.id === id ? stock : null)
    setStockList([...stockList, soldStock[0]])
  }

  function alphabeticSort(){
    function compare(a,b){
      const nameA = a.name
      const nameB = b.name
      let comparison = 0
    
      if (nameA > nameB){
        comparison = 1
      } else if (nameA < nameB){
        comparison = -1
      }
      return comparison
    }
    setStockList([...stockList].sort(compare))
    setPortfolioStocks([...portfolioStocks].sort(compare)) 
  }

  function priceSort(){
    function compare(a,b){
      const priceA = a.price
      const priceB = b.price
      let comparison = 0
    
      if (priceA > priceB){
        comparison = 1
      } else if (priceA < priceB){
        comparison = -1
      }
      return comparison
    }
    setStockList([...stockList].sort(compare))
    setPortfolioStocks([...portfolioStocks].sort(compare)) 
  }

  function categoryFilter(e){
    console.log(e.target.value)
    const stocksToDisplay = stockList.filter(stock =>{
      if (stock.type === e.target.value){
        return true
      } else{
        return null
      }
    })
    const portfolioStocksToDisplay = portfolioStocks.filter(stock =>{
      if (stock.type === e.target.value){
        return true
      } else {
        return null
      }
    })
    setStockList(stocksToDisplay)
    setPortfolioStocks(portfolioStocksToDisplay)
  }

  return (
    <div>
      <SearchBar 
        onAlphabeticSort={alphabeticSort}
        onPriceSort={priceSort}
        onCategoryFilter={categoryFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stockList={stockList}
            onBuy={handleBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolioStocks={portfolioStocks}
            onSell={handleSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
