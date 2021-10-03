import styled from "styled-components";

const AboutCard = ({ bgColor, title, description }) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default AboutCard;

const Wrapper = styled.div`
  width: 100%;
  padding: 72px 42px;
  margin-bottom: 30px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "black")};

  @media screen and (max-width: 767px) {
    padding: 30px 20px;
    margin-bottom: 15px;
  }
`;

const Title = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 600;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    font-weight: 600;
  }
`;

const Description = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 400;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    font-weight: 400;
  }
`;
