import Button from "./button";


function Card({ p1, p2, textBtn, cardImg, cardAlt }) {
  return (
    <div>
      <p>{p1}</p>
      <p>{p2}</p>
      <Button
        padding="10px 20px"
        backgroundColor="black"
        color="white"
        btnText={textBtn}
      />
      <img src={cardImg} alt={cardAlt} />
    </div>
  );
}
export default Card