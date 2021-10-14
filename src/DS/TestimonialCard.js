import React from "react";
import styled from "styled-components";

const TestimonialCard = ({ imageUrl, title, subTitle, profession }) => {
  return (
    <>
      <TestWrapper>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <ImageWrapper>
              <Image src={imageUrl} alt="" />
            </ImageWrapper>
          </div>
          <div className="col-sm-12 col-md-8">
            <TextWrapper>
              <div style={{ display: "flex" }}>
                <H2>{title}</H2>
                <PP>{profession}</PP>
              </div>

              <P>{subTitle}</P>
            </TextWrapper>
          </div>
        </div>
      </TestWrapper>
    </>
  );
};

export default TestimonialCard;

const TestWrapper = styled.div`
  padding: 30px 0px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 225px;
  height: 225px;
  object-fit: contain;
  border-radius: 50%;
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
  margin-right: 15px;
`;

const PP = styled.p`
  font-size: 30px;
  font-weight: 200;
  line-height: 40px;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px 30px 30px 0px;
  color: white;
  @media screen and (max-width: 767px) {
    margin: 0px 30px 0px 30px;
  }
`;
