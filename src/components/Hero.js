import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../DS/Button";
import BgImage from "../images/hero_small.jpg";

const HeroSmall = () => {
  return (
    <HeroWrapper>
      <div className="row">
        <div className="col-12">
          <TextWrapper>
            <H1>24*7 Healthcare Services at Home</H1>
            <P>Taking Care of your family is our highest honour</P>
          </TextWrapper>
          <ButtonWrapper>
            <div className="mt-4">
              <Link to="/service">
                <Button width="280" reverse={true}>
                  View Services
                </Button>
              </Link>
            </div>
            <div className="mt-2">
              <Link to="/about">
                <Button width="280" reverse={false}>
                  Our Research
                </Button>
              </Link>
            </div>
          </ButtonWrapper>
          <ImageWrapper>
            <Image src={BgImage} alt="" />
          </ImageWrapper>
        </div>
      </div>
    </HeroWrapper>
  );
};
export default HeroSmall;

const HeroWrapper = styled.div`
  background: black;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 70vh;
  z-index: 98;
`;

const TextWrapper = styled.div`
  padding: 0px 15px;
  width: 100%;
  /* height: 100%; */
  z-index: 999;
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  padding: 0px 15px;
  width: 100%;
  /* height: 100%; */
  z-index: 999;
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: 35px;
  z-index: 99;
  color: white;
  text-shadow: 2px 3px 5px black;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  z-index: 99;
  color: white;
  text-shadow: 2px 3px 5px black;
`;
