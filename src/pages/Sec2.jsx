import world from "../images/sec2.png";
import Reuse from "./reuseAble";

function Sec2() {
  return (
    <Reuse
      h1="Send money across"
      h2="Africa, for free!"
      parag="Enjoy borderless payments with Yellow Pay. Make your money move now."
      buttonText="Take me to Yellow Pay"
      imgSrc={world}
      imgWidth="320px"
      bgColor="#8AC3B2"
      direction="row-reverse"
      bgColorBtn="black"
      btnColor="white"
    />
  );
}

export default Sec2;
