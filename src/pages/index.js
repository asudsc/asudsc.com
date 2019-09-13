import React from "react"
import bg from "../images/bg.png";
import logo from "../images/logo.jpg";
import "../styles/home.css";
import Helmet from "react-helmet";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Home = () => (
  <div className={"container"}>
    <Helmet>
      <title>Developer Student Club ASU</title>
    </Helmet>
    <img src={logo} className="logo"></img>
    <div className="socials">
      <a href="https://facebook.com/asudsc" target="_blank" rel="noopener"><FaFacebook /></a>
      <a href="https://instagram.com/asu.dsc" target="_blank" rel="noopener"><FaInstagram /></a>
      <a href="https://twitter.com/asudsc" target="_blank" rel="noopener"><FaTwitter /></a>
    </div>
    <h1 className={"description"}>Powered by <a href="https://developers.google.com">Google Developers</a></h1>
    <h1 className={"comingsoon"}>Coming Soon. Stay tuned for updates.</h1>
  </div>
)

export default Home
