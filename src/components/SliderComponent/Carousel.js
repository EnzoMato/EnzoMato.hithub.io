import React, { useEffect, useState } from 'react';

async function fetchCoins() {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&x_cg_demo_api_key=CG-tAWGjEWbheQHYqXGqZdtVLVM");
  const data = await res.json();
  return data;
}

function ApiMarketCrypto() {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoins();
      setCoinData(data.slice(0, 10)); // Show only the first 5 coins
    }

    fetchData();
  }, []);

  if (!coinData) {
    // Loading state (you can customize this)
    return <div>Loading...</div>;
  }

  return (
    <div className="flat-pages-title-home4 relative">
      <div className="themesflat-container w-full">
        <div className="row">
          {/* Render the first 5 coins */}
          {coinData.map((coin) => (
            <div key={coin.id}>
              <img src={coin.image} alt={coin.name} />
              <h3>{coin.symbol} {coin.name}</h3>
              <p>Price: ${coin.current_price}</p>
              {/* Add other relevant information here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApiMarketCrypto;
