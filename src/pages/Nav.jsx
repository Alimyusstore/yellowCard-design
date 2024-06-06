import logo from '../images/logo.svg'

function Nav(){

    let third3 = {display: "flex", gap: "2rem"};
    return (
        <>
      <div className="nav">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <p>Company</p>
          <p>Product</p>
          <p>Service</p>
          <p>Help Center</p>
        </div>
        <div style={third3}>
          <p>English</p>
          <p>Login</p>
          <button className="nav-btn">Sign up</button>
        </div>
      </div>
        </>
    );
}

export default Nav