import crypto from "../images/crypto.png";
import bgImages from "../images/sec3.png"
// import Sec1 from "./Sec1";
import Reuse from "./reuseAble";

function Sec3() {
  return (
    <Reuse
      h1="Crypto, at your"
      h2="fingertips"
      parag="Buy, sell, send and receive BTC, USDT, ETH and much more. Join the
             money movement today."
      buttonText="Get started with crypto"
      imgSrc={crypto}
      imgWidth="320px"
      h1Color="white"
      bgImage={bgImages}
      textColor="white"
      bgColorBtn="#FFD755"
    />
  );
}

export default Sec3;
