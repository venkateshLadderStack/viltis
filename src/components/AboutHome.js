import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../DS/Button";
import AboutImg from "../images/about.jpg";

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
              We provide you with the best, most experienced analysts. Our
              community gets alongside you and your organization, providing
              alternative approaches where they fit, real-world solutions, and
              high impact solutions. We give you insights that grow, change, and
              challenge, and we’ll always be your cheerleader.
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
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0px 10px;
`;
