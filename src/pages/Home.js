import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AboutHome from "../components/AboutHome";
import HeroSmall from "../components/Hero";
import HeroLarge from "../components/HeroLarge";
import Button from "../DS/Button";
import HomeServiceLeft from "../DS/HomeServiceLeft";
import HomeServiceRight from "../DS/HomeServicesRight";
import useWindowSize from "../hooks/useWindowSize";
import Service from "../images/service_home.jpg";
import Profile from "../images/profile.jpg";
import TestimaonialSlider from "../components/TestimonialSlider";
import JoinUs from "../components/JoinUs";

const Home = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width > 767 ? <HeroLarge /> : <HeroSmall />}
      <AboutHome />
      <SubHead>Services we offer ?</SubHead>
      <HomeServiceLeft
        title={"Name of the Service."}
        subTitle={"Small description about that service, keep it really small"}
        imageUrl={Service}
      />
      <Line />
      <HomeServiceRight
        title={"Name of the Service."}
        subTitle={"Small description about that service, keep it really small"}
        imageUrl={Service}
      />
      <Line />
      <HomeServiceLeft
        title={"Name of the Service."}
        subTitle={"Small description about that service, keep it really small"}
        imageUrl={Service}
      />
      <Line />
      <HomeServiceRight
        title={"Name of the Service."}
        subTitle={"Small description about that service, keep it really small"}
        imageUrl={Service}
      />
      <TestimaonialSlider />
      <JoinUs
        text="Lorem ipsum dolor"
        btnText="Subscribe"
        caption="Lorem ipsum dolor Lorem ipsum dolor"
      />
    </>
  );
};

export default Home;

const SubHead = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin: 30px 0px 20px 0px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid grey;
  opacity: 0.7;
  margin: 10px 0px;
`;
