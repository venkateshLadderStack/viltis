import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../DS/Button";
import AboutImg from "../images/about.png";

const AboutHome = () => {
  return (
    <Wrapper>
      <SubHead>Who are we ?</SubHead>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <ImageWrapper>
            <Image src={AboutImg} alt="" />
          </ImageWrapper>
        </div>
        <div className="col-sm-12 col-md-6">
          <TextWrapper>
            <H2></H2>
            <P>
              Viltis is everything you need when you think of medical &
              healthcare services at home. We are committed to quality in
              rendering home healthcare services for speedy patient recovery. At
              Viltis we carefully choose people who are compassionate,
              empathetic and easily approachable. Moreover, the services
              provided by us are timely executed, affordable and flexible.
            </P>
            <P>
              {" "}
              Our commitment is to offer quality home-healthcare services to our
              clients as per their needs. We make sure that our Nurses,
              Physiotherapists, Doctors, Caretakers, or all Healthcare
              Professionals provided by us are well-trained and specialized in
              their respective areas.
            </P>
            <div className="m-4">
              <Link to="/about">
                <Button width={"200"}>Read More</Button>
              </Link>
            </div>
          </TextWrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutHome;

const Wrapper = styled.div`
  background: #f4f5f4;
  padding: 30px 0px 50px 0px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const SubHead = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const H2 = styled.h2``;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0px 10px;
`;
