import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const HomeServiceLeft = ({ title, subTitle, imageUrl, id }) => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <ImageWrapper>
            <Image src={imageUrl} alt="" />
          </ImageWrapper>
        </div>
        <div className="col-8">
          <TextWrapper>
            <H2>{title}</H2>
            <P>{subTitle}</P>
            <HashLink to={`/service#${id}`}>
              <More>Read More</More>
            </HashLink>
          </TextWrapper>
        </div>
      </div>
    </>
  );
};

export default HomeServiceLeft;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`;

const SubHead = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin: 30px 0px 20px 0px;
`;

const H2 = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 40px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
  }
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    margin-top: 0px;
  }
`;

const More = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-decoration-line: underline;
  color: black;
`;
