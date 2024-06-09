import logo from '../images/logo.svg'
import Button from './button';

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
            <Button padding="0 40px" backgroundColor ="black" color="white" btnText="Sign up" />
          </div>
        </div>
      </>
    );
}

export default Nav