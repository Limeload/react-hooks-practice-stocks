import React from "react";
import Stock from "./Stock";

function StockContainer({ stockArray, onAddStock }) {
  const stockList = stockArray.map((stock) => (
    <Stock key={stock.id} stock={stock} onStockClick={onAddStock} />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;