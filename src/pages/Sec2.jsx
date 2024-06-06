import world from "../images/sec2.png";

function Sec2() {
  return (
    <div className="sec2" style={{ overflow: "hidden" }}>
      <div>
        <img src={world} style={{ width: "320px" }} alt="world" />
      </div>
      <div
        style={{
          marginRight: "8%",
          marginTop: "-50px",
          lineHeight: "30px",
          fontFamily: "Arial",
          color: "black"
        }}
      >
        <h1
          style={{
            fontSize: "35px",
          }}
        >
          Send money across
        </h1>
        <h2 style={{ fontSize: "33px" }}>Africa, for free!</h2>
        <p style={{ fontWeight: "bold", width: "450px", fontSize: "13.5px" }}>
          Enjoy borderless payments with Yellow Pay. Make your money move now.
        </p>
        <button
          style={{
            padding: "10px 30px",
            fontSize: "13px",
            backgroundColor: "#000",
            color: "white",
            borderRadius: "5px",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Take me to Yellow Pay
        </button>
      </div>
    </div>
  );
}

export default Sec2;
