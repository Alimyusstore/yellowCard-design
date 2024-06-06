import phone2 from "../images/phone2.png";

function Sec4() {
  return (
    <div className="sec4">
      <div
        style={{
          marginTop: "-50px",
          lineHeight: "30px",
          fontFamily: "Arial",
          color: "black"
        }}
      >
        <h1
          style={{
            fontSize: "32px",
          }}
        >
          Manage your business
        </h1>
        <h2 style={{ fontSize: "30px" }}>payments</h2>
        <p style={{ fontWeight: "bold", width: "400px", fontSize: "12px" }}>
          Connect your business to Africa with one API. Manage customer
          transactions effortlessly.
        </p>
        <button
          style={{
            padding: "10px 30px",
            fontSize: "13px",
            backgroundColor: "black",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Take me to Payments API
        </button>
      </div>
      <div>
        <img src={phone2} style={{ width: "300px" }} alt="phone" />
      </div>
    </div>
  );
}

export default Sec4;
