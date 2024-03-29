import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../DS/Button";
import BgImage from "../images/hero_large.jpg";

const HeroLarge = () => {
  return (
    <HeroWrapper>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <TextWrapper>
            <H1>
              24*7 Healthcare <br />
              Services at Home
            </H1>

            <div className="mt-4">
              <Link to="/service">
                <Button width="250" reverse={true}>
                  View Services
                </Button>
              </Link>
            </div>
            <div className="mt-2">
              <Link to="/about">
                <Button width="250" reverse={false}>
                  Our Research
                </Button>
              </Link>
            </div>
          </TextWrapper>
        </div>
        <div className="col-sm-12 col-md-8">
          <ImageWrapper>
            <Image src={BgImage} alt="" />
          </ImageWrapper>
        </div>
      </div>
    </HeroWrapper>
  );
};
export default HeroLarge;

const HeroWrapper = styled.div`
  padding: 30px 25px;
  background: black;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.5;
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 55px;
  white-space: nowrap;
  z-index: 99;
  color: white;
  text-shadow: 2px 3px 5px black;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  white-space: nowrap;
  z-index: 99;
  color: white;
  text-shadow: 2px 3px 5px black;
`;
