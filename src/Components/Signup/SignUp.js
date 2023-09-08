import React from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";
const SignUp = () => {
    return (
        <main className="pa4 black-80">
            <article className="br2 ba b--black-10 mv5 w-200 w-50-m w-25-l  center shadow-5">
                <form className="measure mt3 mb3 ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-white w-100 white ba b--black bw1" type="text" name="Name" id="email-address" placeholder="Enter your Name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address" >Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-white w-100 white ba b--black bw1" type="email" name="email-address" id="email-address" placeholder="Enter the Email" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input className="pa2 input-reset ba bg-transparent  hover-white w-100 b--black bw1" type="password" name="password" id="password" placeholder="Enter the password" y />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 b pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div className="">
                        <NavLink exact to="/home">
                            <input className="b ph3 pv2 input-reset ba bw1 b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up" />
                        </NavLink>
                    </div>
                    <div className="lh-copy mt3">
                        <NavLink exact to="/" className="f5 b link black db  mt5">
                            If already have account, <br></br><span className="dim center">Sign In</span>
                        </NavLink>
                    </div>
                </form>
            </article>
        </main >
    )
}
export default SignUp;