import phone from '../images/phone.png'

function Sec1() {
 return (
   <div className="sec1" style={{ overflow: "hidden" }}>
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
           color: "#FFD755",
           fontSize: "32px",
         }}
       >
         Financial Freedom
       </h1>
       <h2 style={{ fontSize: "30px" }}>starts here</h2>
       <p style={{ fontWeight: "bold", width: "400px" }}>
         Get crypto. Make payments. What's your money move?
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
         Make your move
       </button>
     </div>
     <div style={{ marginTop: "60px" }}>
       <img src={phone} style={{ width: "600px" }} alt="phone" />
     </div>
   </div>
 );
}

export default Sec1