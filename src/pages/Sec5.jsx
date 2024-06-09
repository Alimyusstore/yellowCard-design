import plane from '../images/cryplane.png';
import trump from '../images/crytrump.png';
import paper from '../images/crypaper.png';
import Button from './button';
import Card from './Card';

function Sec5(){
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            padding: "50px 90px",
          }}
        >
          <div style={{ display: "grid", gap: "50px" }}>
            <div class="theTwo">
              <Card
                p1="Yellow Card Academy"
                p2="Everything you need to know about crypto"
                textBtn="Yellow Card Academy"
                cardImg={plane}
                cardAlt="crypto plane"
              />
              <Card
                p1="Yellow Card Blog"
                p2="Stay updated with the lasest crypto news"
                textBtn="Yellow Card Blog"
                cardImg={trump}
                cardAlt="crypto trump"
              />
            </div>

            <div class="theOne">
              <div>
                <p>Crypto scoop</p>
                <p>Sign up for our weekly newsletter</p>
                <p>
                  Stay informed with the latest updates to buy, sell, and store
                  your crypto on the go.
                </p>
                <div style={{ backgroundColor: "white" }}>
                  <input type="text" placeholder="Enter your email address" />
                  <Button
                    padding="11px 25px"
                    backgroundColor="black"
                    color="white"
                    btnText="Sign up for free"
                  />
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