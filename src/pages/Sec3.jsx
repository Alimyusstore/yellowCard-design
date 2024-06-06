import crypto from "../images/crypto.png";

function Sec3() {
  return (
    <div className="sec3" >
      <div
        style={{

          marginTop: "-50px",
          lineHeight: "30px",
          fontFamily: "Arial",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
          }}
        >
          Crypto, at your
        </h1>
        <h2 style={{ fontSize: "30px" }}>fingertips</h2>
        <p style={{ fontWeight: "bold", width: "400px", fontSize: "12px" }}>
          Buy, sell, send and receive BTC, USDT, ETH and much more. Join the
          money movement today.
        </p>
        <button
          style={{
            padding: "10px 30px",
            fontSize: "13px",
            backgroundColor: "#FFCF33",
            borderRadius: "5px",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Get started with crypto
        </button>
      </div>
      <div>
        <img src={crypto} style={{ width: "300px" }} alt="phone" />
      </div>
    </div>
  );
}

export default Sec3;
