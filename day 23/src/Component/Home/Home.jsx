import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  UncontrolledCarousel,
} from "reactstrap";
import web from "../../images/nh.jpg";
import Base from "../Base/Base";
import Common from "../Common/Common";
import image from "../Home/mother-child.jpg";
import we from "../../images/sd.jpg";
import CreateCorosol from "../carsoul";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import BaseCart from "../Base/BaseCart";
import video from '../../images/pharmacy.mp4';


const Home = () => {
  return (
    <BaseCart>
    <div className="container-fluid">
          
        <div className="home-img">
        <video id="background-video" autoPlay loop muted>
              <source src={video} type="video/mp4" />
         </video>
        </div>
          {/* <Common name="Home Page" visit="/services" btname="Get Started" /> */}

          {
            <Common
            
              name="Home Page"
              imgsrc={web}
              visit="/Login"
              btname="Get Started"
              
              
            />
          }
          
      </div></BaseCart>
  );
};

export default Home;
