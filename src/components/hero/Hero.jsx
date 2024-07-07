import React, { useState } from "react";

import "./hero.css";
import gym from "../../assets/gymhob-transformed.png";
const Hero = () => {
  const [password, setPassword] = useState(false);
  const handlepass = () => {
    setPassword(!password);
  };
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero-left">
          <h3>
            Explore Your <span className="sky">hobby</span> or{" "}
            <span className="violet">passion</span>
          </h3>
          <p>
            Hobbies are great distractions from the worries and troubles that
            plague daily living Passion is energy Feel the power that comes from
            focusing on what excites you,A hobby a day keeps the doldrums
            away,The things you are passionate about are not random, they are
            your calling....
          </p>
          <img src={gym} alt="" />
        </div>
        <div className="hero-right">
          <div className="login">
            
            <div className="login-form">
              <h3>{signState}</h3>
              <form>
                {signState === "Sign Up" ? (
                  <input className="input" type="text" placeholder="Enter Name" />
                ) : (
                  <></>
                )}

                <input className="input" type="email" placeholder="Email" />
                <input className="input"
                  type={password ? "text" : "password"}
                  placeholder="Password"
                />
                <button>{signState}</button>
                {password}
                <div className="form-help">
                  <div className="remember">
                    <input type="checkbox" />
                    <label htmlFor="">Remember me</label>
                  </div>
                  <p>Need help?</p>
                </div>
              </form>
              <div className="form-switch">
                {signState === "Sign In" ? (
                  <p>
                    New to hobbycue?{" "}
                    <span onClick={() => setSignState("Sign Up")}>
                      Sign up now
                    </span>{" "}
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <span onClick={() => setSignState("Sign In")}>Sign in</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
