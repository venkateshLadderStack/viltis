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

import Patient from "../images/old2.png";
import Old from "../images/old.png";
import Nurse from "../images/nurse.png";
import Test from "../images/test.png";
import Child from "../images/child.png";
import Medical from "../images/medical.png";
import Heart from "../images/heart.png";
import Ambulane from "../images/ambulace.png";

const Home = () => {
  const { width } = useWindowSize();

  return (
    <div id="top">
      {width > 767 ? <HeroLarge /> : <HeroSmall />}
      <AboutHome />
      <SubHead>Services we offer ?</SubHead>
      <HomeServiceLeft
        title={"Patient Care Attendants"}
        subTitle={
          "After medical help, we require support for daily activities and a home care attendant provides comprehensive support at home. Trained attendants often known as caregivers offer reliable assistance which a patient needs."
        }
        imageUrl={Patient}
        id="patient-care-attendants"
      />
      <Line />
      <HomeServiceRight
        title={"Elderly Care"}
        subTitle={
          "Ageing is an inevitable process in everyone’s lives. One can be busy in service or in business both physically and mentally. This exertion can be seen on the body later on in life. As superannuation or retirement age approaches, lifestyle affects many with slow paced physical disabilities & diseases."
        }
        imageUrl={Old}
        id="elderly-care"
      />
      <Line />
      <HomeServiceLeft
        title={"Physiotherapy"}
        subTitle={
          "Physiotherapy has proved over the years its effectiveness in helping patients in restoring their health and enhancing their physical strength, function and mobility. "
        }
        imageUrl={Test}
        id="physiotherapy"
      />
      <Line />
      <HomeServiceRight
        title={"Home Nursing Services"}
        subTitle={
          "The care provided to the patient at the hospital can now be efficiently provided at home, this is called a Home Nursing Service. Patients during recovery who have gone through trauma require specialized care for the long/short term."
        }
        imageUrl={Nurse}
        id="home-nursing"
      />
      <Line />
      <HomeServiceLeft
        title={" Infant and Newborn Care"}
        subTitle={
          "Once any female gets pregnant and reaches the last level of delivery,     she isn’t ready to pay attention to herself. Newly parents are always afraid of taking care of their infant when it comes to their first baby."
        }
        imageUrl={Child}
        id="infant-and-newborn-care"
      />
      <Line />
      <HomeServiceRight
        title={"Diagnostic Services"}
        subTitle={
          "Our Diagnostic services are a form of an essential component of modern healthcare services as getting regular check-ups and lab tests are convenient at home which is backed up by comprehensive quality standards and wide range medical testing. "
        }
        imageUrl={Medical}
        id="diagnostic"
      />
      <Line />
      <HomeServiceLeft
        title={"Medical Equipments"}
        subTitle={
          "Viltis provides different medical equipment on rent at your home in order to achieve complete care at home. Various medical facilities can be made available to the client through Viltis."
        }
        imageUrl={Heart}
        id="medical-equipments"
      />
      <Line />
      <HomeServiceRight
        title={"Ambulance Services"}
        subTitle={
          "We provide basic Ambulance, Paediatric Ambulance, ICU/Cardiac Ambulance, Outstation Ambulance, Patient Transport Vehicle and even Air Ambulance."
        }
        imageUrl={Ambulane}
        id="ambulance"
      />
      <TestimaonialSlider />
      <JoinUs
        text="Register Today "
        btnText="Register"
        caption="To let our family take care of yours."
      />
    </div>
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
