import React from "react";
import Navbar from "../Navbar";
import Image from "./aaa.png"
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar/>
      <main className="hero">
          <div className="hero-content">
            <h1 className="title_Main">CareerConnect</h1>
            <p>
            Elevate Your Placement Journey
            </p>

            <div className="hero-btn">
              <button className="hero-real"><p className="paraGraph">Start</p></button>
            </div>
          </div>
          <div className="hero-main-pic">
            <img src={Image} alt="stuff" />
          </div>
      </main>
      {/* <div className="social-media" data-testid="images">
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg" alt="fb" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg" alt="google" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg" alt="youtube" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg" alt="linkedin" />
      </div> */}
    </>
  );
};

export default Home;
