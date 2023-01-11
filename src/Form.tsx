// import { Hobby } from "models/AuthnRequest";
import React, { useState } from "react";
import { Hobby } from "./models/AuthnRequest";


class FluidInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      focused: false,
      value: ""
    };
  }
  focusField() {
    const { focused } = this.state;
    this.setState({
      focused: !focused
    });
  }
  handleChange(event: { target: any; }) {
    const { target } = event;
    const { value } = target;
    this.setState({
      value: value
    });
  }
  render() {
    const { type, label, style, id } = this.props;
    const { focused, value } = this.state;

    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value !== "") {
      inputClass += " fluid-input--open";
    }

    return (
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">

          <input
            className="fluid-input-input"
            type={type}
            id={id}
            onFocus={this.focusField.bind(this)}
            onBlur={this.focusField.bind(this)}
            onChange={this.handleChange.bind(this)}

          />
          <label className="fluid-input-label" >{label}</label>

        </div>
      </div>
    );
  }
}

export default function LoginContainer() {

  const style = {
    margin: "15px 0"
  };

  const [tenant, setTenant] = useState('');
  const [policy, setPolicy] = useState('');
  const [issuer, setIssuer] = useState('');


  const loginClick = (e: any) => {
    console.log('click')
    console.log(tenant)
    console.log(policy)
    console.log(issuer)

    const hobbies = [
      new Hobby('reading', 'loves to read books, magazines and web articles'),
      new Hobby('listening to Music', 'loves to listen to rock music'),
      new Hobby('travelling', 'loves to travel around the world'),
    ];
    // const pets = ['dog', 'cat'];
    // const bob = new Person('Bob', 'Mad', 29, hobbies, pets);

    // const bobXml = xml.serialize(bob);

    // console.log(bobXml);
    // console.log(url)
    // window.location.href = url;

  }


  const inputClass = "fluid-input fluid-input--open";

  return (
    <div className="login-container">
      <div className="title">
        Login
      </div>
      {/* <FluidInput type="text" label="Tenant Name" id="tenant" style={style} />
      <FluidInput type="text" label="B2C Policy" id="policy" style={style} />
      <FluidInput type="text" label="Issuer" id="issuer" style={style} /> */}
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">

          <input
            className="fluid-input-input"
            type="text"
            id={tenant}
            onChange={e => setTenant(e.target.value)}
          />
          <label className="fluid-input-label" >Tenant Name</label>

        </div>
      </div>
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">

          <input
            className="fluid-input-input"
            type="text"
            id={tenant}
            onChange={e => setPolicy(e.target.value)}
          />
          <label className="fluid-input-label" >Policy</label>

        </div>
      </div>
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">

          <input
            className="fluid-input-input"
            type="text"
            id={tenant}
            onChange={e => setIssuer(e.target.value)}
          />
          <label className="fluid-input-label" >Issuer</label>

        </div>
      </div>
      {/* <Button buttonText="log in" buttonClass="login-button" /> */}
      <button className="button login-button" onClick={loginClick} >Log in</button>
    </div>
  );

}


const url = "https://partnernet.b2clogin.com/partnernet.onmicrosoft.com/B2C_1A_SIGNIN_SAML/samlp/sso/login?&SAMLRequest=nVNdb9swDPwrgl4Hf8hJ00yIE7gJuhnoMq9O%2bxooDt0KkCVPlNNtv36yk2wdhhZFX8nT8e5IzRY%2fGkUOYFEanVIWxpSArsxe6oeUdq4OpnQxn6FoVMuzzj3qW%2fjeATri32nkfcPjrOZGoESuRQPIXcXL7MsNT8KYC0SwzrNTkq9SumUTFo%2bn09F4TMn9ea4H%2bjYWHiwPkNJaKARKro2tYJj6p5QjdpBrdEI7%2fy5ORkHMAsY28YhfTDibhB8vxpej6eWHOOaxZ115sVKLXkFKH51rkUdRK6zTYDW4cJdUyjxIHVameV43upGVNWhqN7SukuWWZdsy%2f7TO19veXjSkEiGaaGBYUFJY40xl1JXUpwRfSWZ3BCH%2fvNkUQfG13FCSndNaGo1dA7YEe5AV3N3e%2fFXfz3XelmjbJBS%2fOgtPsEPpS6FXHpVF9B8Nfbav9nVZ7ckDPa6dD4nbd%2bx7%2fja9s6F%2fGnM%2btbXnzVeFUbL6%2bQ7pJFPKPC0tCOevydnueEyN8DfzEgEL2VCR%2b6AeoBwaIVW231tApKQselHfOqFkLcG%2bdR2URPOjxX8%2f0Pw3&RelayState=cGFydG5lcm5ldC5vbm1pY3Jvc29mdC5jb20%3d.QjJDXzFBX1NJR05JTl9TQU1M.aHR0cHM6Ly9zYW1sdGVzdGFwcDIuYXp1cmV3ZWJzaXRlcy5uZXQ%3d";