import React from "react";
import styled from "styled-components";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const InfoCard = ({ imageUrl, name, position, description }) => {
  return (
    <Wrapper className="row">
      <ImageContainer className="col-sm-12 col-md-6">
        <Image src={imageUrl} alt="" />
      </ImageContainer>
      <Info className="col-sm-12 col-md-6">
        <H3>{name}</H3>
        <H4>{position}</H4>
        <P>{description}</P>
      </Info>
    </Wrapper>
  );
};

export default InfoCard;

const Wrapper = styled.div`
  padding: 20px 0px;
  border-radius: 5px;
  margin: 20px 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const ImageContainer = styled.div``;

const Info = styled.div`
  height: 100%;
  border-left: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    border-left: 0px;
    border-top: 1px solid grey;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
`;

const H4 = styled.h4`
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  align-items: center;
  background: white;
`;

const Number = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  margin-left: 15px;
`;
