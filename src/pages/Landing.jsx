import Nav from './Nav'
// import Reuse from './reuseAble'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'
import Sec5 from './Sec5'
import Footer from './FooterSec'
import '../css/Landing.css'

function Landing(){
    
    return(
        <div style={{ width: "98.5vw", padding: 0, margin: 0}}>
            <Nav />
            <Sec1 />
            <Sec2 />
            <Sec3 />
            <Sec4 />
            <Sec5 />
            <Footer />
        </div>
    )
}

export default Landing