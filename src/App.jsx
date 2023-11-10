import { useEffect, useState } from "react";
import axios from "axios";
import CoinCard from "./components/CoinCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [coinPrices, setCoinPrices] = useState();

  const getCoinPrices = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-MATIC,BTC-ASTR,KRW-EOS"
      );
      console.log(response);
      setCoinPrices(response.data);
      //setCoinPrices를 안쓰고 있었다. 이렇게 셋코인 프리이스를 써서
      //밑에서 출력이 있다고 나옴
    } catch (error) {
      console.error(error);
    } //try에서 문제 생기면 catch로 넘어감
    // asycn 쓰면 트라이캣치 같이 써서 오류 잡아줘야됨

    console.log(axios);
  };

  useEffect(() => {
    getCoinPrices();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center grid grid-3">
      {coinPrices ? (
         
        <ul className="w-96 flex flex-col gap-4 border-8 p-5">
          {/* 기존 CSS랑 슬릭CSS랑 충돌해서 ul태그에 다른 css 넣으면 
      아예 안떠버림 */}
     <div className="flex justify-center items-center text-lg text-red-800">코인이 왕이다</div>
          <Slider autoplay={true} autoplaySpeed={200} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={400} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={600} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={800} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={1000} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={1200} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={1400} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={1600} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={1800} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={2000} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={2200} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={3000} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={4000} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
          <Slider autoplay={true} autoplaySpeed={5000} arrows={false} dots={true} >
            {coinPrices.map((v, i) => {
              return (
                <CoinCard
                  key={i}
                  coinPrice={v}
                  btcPrice={coinPrices[0].trade_price}
                  // 내려받은 btcPrice를 기존의 coinPrices의 가격으로 출력
                />
              );
            })}
          </Slider>
        </ul>
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default App;
