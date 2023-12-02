import React, { useState, useEffect } from 'react'
import './MarketPlace.css'
import axios from 'axios';


function MarketPlace() {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  function numberCount(num) {
    const newNum = num.toString()

    if (newNum.length >= 10) {
      return newNum.slice(0,-9) + 'B'
    } else if (newNum.length >= 7) {
      return newNum.slice(0,-6) + 'M'
    } else {
      return newNum;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`);
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className='market-container' id='marketplace'>
    
      <p>Market Overview</p>
      <div className='market-box'>
          <div className='market-categories'>
            <span>Name</span>
            <span className='price-category'>Price</span>
            <span className='price-change'>24h</span>
            <span className='price-cap'>Market Cap</span>
          </div>
        {cryptoData.length > 0 ? (
          cryptoData.map((crypto) => (
            <div key={crypto.id} className='market-item'>
              <img src={crypto.image} alt="" />
              <span>{crypto.symbol.toUpperCase()}
                <span className='crypto-sub'>{crypto.name}</span>
              </span>
              <span>${crypto.current_price.toFixed(2)}</span>
              <span
                className={
                  crypto.price_change_percentage_24h >= 0
                  ? 'green-text'
                  : 'red-text'
                }
              >{crypto.price_change_percentage_24h.toFixed(2) + '%'}</span>
              <span className='right-align'>${numberCount(crypto.market_cap)}</span>
            </div>
          ))
          ) : (
            <p>Loading...</p>
        )}

        <div className="market-bottom-c">
          <p>*If loading, it's due to the API call limit being reached. Please try again in 5 minutes</p>
          <div className='market-btn-c'>  
            <button onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>
              <i class="fa-solid fa-caret-left fa-xl"></i>
            </button>
            <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
              <i class="fa-solid fa-caret-right fa-xl"></i>
            </button>
          </div>
        </div>
        
      </div>        
    </div>
  )
}

export default MarketPlace