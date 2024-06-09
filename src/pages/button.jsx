

function Button({ padding, backgroundColor, color, btnText }) {
  return (
    <>
      <button
        style={{
          padding,
          backgroundColor,
          color,
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {btnText}
      </button>
    </>
  );
}

export default Button