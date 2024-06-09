import phone2 from "../images/phone2.png";
import Reuse from "./reuseAble";
import bgImages from "../images/sec4.png";
function Sec4() {
  return (
    <Reuse
      h1="Manage your business"
      h2="payments"
      parag=" Connect your business to Africa with one API. Manage customer
              transactions effortlessly."
      buttonText="Take me to Payments API"
      imgSrc={phone2}
      imgWidth="300px"
      bgImage={bgImages}
      bgColorBtn="black"
      btnColor="white"
    />
  );
}

export default Sec4;
