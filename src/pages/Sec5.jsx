import plane from '../images/cryplane.png';
import trump from '../images/crytrump.png';
import paper from '../images/crypaper.png';

function Sec5(){
    return (
    <div style={{display: "flex", justifyContent: 'center'}}>
      <div style={{display: 'grid', gridTemplateColumns: "1fr", padding: "50px 90px"}}>
        <div style={{display: 'grid', gap:"50px"}}>

          <div class="theTwo">

            <div>
              <p>Yellow Card Academy</p>
              <p>Everything you need to know about crypto</p>
              <button>Visit YC Academy</button>
              <img src={plane} alt="crypto plane" />
            </div>

            <div>
              <p>Yellow Card Blog</p>
              <p>Stay updated with the lasest crypto news</p>
              <button>Visit YC Blog</button>
              <img src={trump} alt="crypto trump" />
            </div>

          </div>

          <div class="theOne">
            <div>
              <p>Crypto scoop</p>
              <p>Sign up for our weekly newsletter</p>
              <p>
                Stay informed with the latest updates to buy, sell, and store
                your crypto on the go.
              </p>
              <div style={{backgroundColor: "white"}}>
              <input type="text" placeholder="Enter your email address" />
              <button style={{color: "white", backgroundColor: "black", padding: "11px 25px", border: "none", borderRadius: "7px"}}>Sign up for free</button>
              </div>
            </div>

            <div>
              <img src={paper} alt="crypto play" />
            </div>

          </div>

        </div>
      </div>
      </div>
    );
}

export default Sec5