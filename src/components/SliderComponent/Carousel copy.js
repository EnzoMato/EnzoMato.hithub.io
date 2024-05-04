import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const list = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 59131,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 2966.11,
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    current_price: 1,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 560.33,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 137.27,
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USDC",
    image: "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    current_price: 0.998813,
  },
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 59131,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 2966.11,
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    current_price: 1,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 560.33,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 137.27,
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USDC",
    image: "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    current_price: 0.998813,
  },
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 59131,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 2966.11,
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    current_price: 1,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 560.33,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 137.27,
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USDC",
    image: "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    current_price: 0.998813,
  }
];

function Carousel() {
  const sliderRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     sliderRef.current.slickNext();
  //   }, 0); // Velocidad del movimiento
  //   return () => clearInterval(interval);
  // }, []);

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 100, // Desactiva el autoplay
    cssEase: "linear", // Movimiento lineal
    variableWidth: true, // Permite slides de ancho variable
    swipeToSlide: true, // Permite desplazarse con el dedo
    centerMode: true, // Centra el slide activo
    arrows: false, // Oculta las flechas de navegación
  };

  const [coinsApi] = useState(list);

  return (
    <>
      <div className="slider-coin">
        <Slider {...settings}>
          {coinsApi.map((coin, index) => {
            return (
              <div key={index} className="coin-section">
                <div className="coin-elements">
                  <img src={coin.image} alt={coin.name} className="coin-img" />
                  <h3 className="coin-name">{coin.id}</h3>
                </div>
                <p className="coin-price">$ {coin.current_price}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
