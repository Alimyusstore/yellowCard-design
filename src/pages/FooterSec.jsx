import logo from '../images/logo2.svg';

function Footer(){
    return (
      <div
        style={{
          backgroundColor: "#492B7C",
          display: "grid",
          gridTemplateColumns: "1fr",
          color: "white",
          padding: "50px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "white",
            justifyContent: "center",
            gap: "70px",
            fontFamily: "Arial",
            borderBottom: "1px solid white",
          }}
        >
          <ul>
            <p>Quicklinks</p>
            <li>Prices</li>
            <li>Fees & Rates</li>
            <li>Become an Ambassador</li>
            <li>Bug Bounty Program</li>
          </ul>
          <ul>
            <p>Products</p>
            <li>OTC</li>
            <li>Crypto</li>
            <li>Yellow Pay</li>
            <li>Payments API</li>
            <li>Academy</li>
          </ul>
          <ul>
            <p>Company</p>
            <li>Blog</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>User Agreement</li>
            <li>Cookie Policy</li>
            <li>Yellow Pay Terms</li>
          </ul>
          <ul>
            <p>Support</p>
            <li>Help Centre</li>
            <li>Supported Countries</li>
            <li>Channel Verification Centre</li>
          </ul>
          <ul>
            <p>Community</p>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "50px",
            padding: "10px 20px 40px 20px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              lineHeight: "1.7"
            }}
          >
            <img src={logo} alt="logo" style={{ width: "80px" }} />
            <p>hello@yellowcard.io</p>
            <p>© 2024 Yellow Card</p>
            <button>English</button>
          </div>
          <div style={{ width: "710px", fontSize: "14px" }}>
            <p style={{marginTop: 0}}>
              Yellow Card is the largest and first licensed Stablecoin on/off
              ramp on the African continent. Operating across 20 countries, we
              provide businesses of all sizes across Africa with secure, liquid,
              and cost-effective access to USDT, USDC, and PYUSD via their local
              currency directly and through our Payments API.
            </p>
            <p>
              Founded by Chris Maurice (CEO) and Justin Poiroux (CTO), Yellow
              Card launched in Nigeria in June 2019 and since then it has
              quickly become one of the fastest-growing FinTechs in Africa, with
              a presence in 20 countries and over $2B USD in transactions.
            </p>
            <p>
              In 2023, Yellow Card was awarded the prestigious “Disrupter of the
              Year” award at the Africa Financial Industry Summit (AFIS). The
              award acknowledges companies that have demonstrated resilience in
              challenging times and whose innovation represents a market
              disruption.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer