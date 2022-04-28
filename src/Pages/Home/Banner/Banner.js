import React from "react";
import './Banner.css'
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/D9hFpgm/ezgif-com-gif-maker-4.gif"
            
            alt="First slide"
          />
          <Carousel.Caption>
           <div className="caption">
           <h1>DOMINATE</h1>
            <h3>The Internet</h3>
            <p>Attract, Engage & Convert </p>
            <span>MORE</span>
            <p>qualifeid vehicle shoppers</p>
           </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/cX0BV8v/ezgif-com-gif-maker-2.gif"
            alt="Second slide"
          />
          <Carousel.Caption>
           <div className="caption">
               <h1 className="text-white">REALITY <span>IS JUST</span> </h1>
               <h3>YOUR PERCEPTION</h3>
           </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/YkZH8LQ/ezgif-com-gif-maker-3.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="caption">
                <h1 className="text-white"><span>Feel</span> the car,</h1>
                <h3> <span>drive</span> it and then <span>show</span> it.</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
