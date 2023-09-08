import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/logo/logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import { useState } from "react";
import SignIn from "./Components/signin/sign";
import TsParticles from "./Components/tsparticles/particles";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/Signup/SignUp";
function App() {
  const [first, second] = useState();
  const onchange = (event) => {
    second(event.target.value);
    console.log(first);
  };
  const onsubmit = () => {
    console.log("ckjsdnkfds");
  };
  return (
    <div>
      <TsParticles />
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route
          exact
          path="/home"
          element={
            <div>
              <Navigation />
              <Logo />
              <Rank />
              <ImageLinkForm onchange={onchange} onsubmit={onsubmit} />
            </div>
          }
        />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
