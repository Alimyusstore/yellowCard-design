import Button from "./button";


function Reuse({
  h1,
  h2,
  parag,
  buttonText,
  imgSrc,
  imgWidth,
  h1Color,
  bgImage,
  bgColor,
  direction,
  textColor,
  bgColorBtn,
  btnColor,
}) {
  return (
    <div
      className="sec1"
      style={{
        overflow: "hidden",
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImage})`,
        flexDirection: direction,
        color: textColor,
      }}
    >
      <div
        style={{
          marginLeft: "8%",
          marginTop: "-50px",
          lineHeight: "30px",
          fontFamily: "Arial",
        }}
      >
        <h1
          style={{
            color: h1Color,
            fontSize: "32px",
          }}
        >
          {h1}
        </h1>
        <h2 style={{ fontSize: "30px" }}>{h2}</h2>
        <p style={{ fontWeight: "bold", width: "400px" }}>{parag}</p>
        <Button
          padding="10px 30px"
          backgroundColor={bgColorBtn}
          btnText={buttonText}
          color={btnColor}
        />
        {/* <button
          style={{
            backgroundColor: "#FFCF33",
          }}
        >
        </button> */}
      </div>
      <div style={{ marginTop: "60px" }}>
        <img src={imgSrc} style={{ width: imgWidth }} alt="phone" />
      </div>
    </div>
  );
}

export default Reuse;
