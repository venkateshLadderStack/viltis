import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import TestimonialCard from "../DS/TestimonialCard";
import Profile from "../images/profile.jpg";

const TestimaonialSlider = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <TestimonialCard
          imageUrl={Profile}
          title={"Meet Mr. John Cena, CEO of Nothing #1"}
          subTitle={
            "Artificial intelligence, machine learning, robotics, drones and automation go together like peas and carrots."
          }
        />
        <TestimonialCard
          imageUrl={Profile}
          title={"Meet Mr. John Cena, CEO of Nothing #1"}
          subTitle={
            "Artificial intelligence, machine learning, robotics, drones and automation go together like peas and carrots."
          }
        />
        <TestimonialCard
          imageUrl={Profile}
          title={"Meet Mr. John Cena, CEO of Nothing #1"}
          subTitle={
            "Artificial intelligence, machine learning, robotics, drones and automation go together like peas and carrots."
          }
        />
        <TestimonialCard
          imageUrl={Profile}
          title={"Meet Mr. John Cena, CEO of Nothing #1"}
          subTitle={
            "Artificial intelligence, machine learning, robotics, drones and automation go together like peas and carrots."
          }
        />
      </Slider>
    </Wrapper>
  );
};

export default TestimaonialSlider;

const Wrapper = styled.div`
  margin: 40px 0px;
  background: black;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1041%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c477 C 288%2c422 1152%2c257 1440%2c202L1440 560L0 560z' fill='rgba(36%2c 117%2c 201%2c 0.76)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1041'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: bottom; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;
