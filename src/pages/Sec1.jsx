import phone from '../images/phone.png'
import Reuse from './reuseAble';
import bgImages from '../images/Sec1.png'

function Sec1() {
 return (
   <Reuse
     h1="Financial Freedom"
     h2="starts here"
     parag="Get crypto. Make payments. What's your money move?"
     buttonText="Make your move"
     imgSrc={phone}
     imgWidth="600px"
     h1Color="#FFD755"
     bgImage={bgImages}
     textColor="white"
     bgColorBtn="#FFD755"
     
   />
 );
}

export default Sec1