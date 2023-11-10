const CoinCard = ({ coinPrice, btcPrice }) => {
  return (
    <li className="text-xl flex justify-center items-center">
      <img
        className="w-6 inline-block"
        //블록이라서 인라인블록으로 바꿈 이미지 위에 붙으니까 옆으로
        src={process.env.PUBLIC_URL+`/images/${coinPrice.market.substring(4)}.png`}
        alt={`${coinPrice.market.substring(4)}`}
        // 알트값은 이미지 안뜰때 뜨는 값//
      />
      <span className="ml-2 w-16">{coinPrice.market.substring(4)}</span>
      <span className="ml-2">
        ₩{" "}
        {coinPrice.market.substring(0, 3) === "BTC"
          ? parseFloat(
              (coinPrice.trade_price * btcPrice).toFixed(2)
            ).toLocaleString()
          : coinPrice.trade_price.toLocaleString()}
      </span>
    </li>
  );
};

export default CoinCard;
