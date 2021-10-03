import styled from "styled-components";
import JoinUs from "../components/JoinUs";
import AboutCard from "../DS/AboutCard";
import InfoCard from "../DS/Infocard";

const About = () => {
  return (
    <>
      <div className="row">
        <Head>About Us</Head>
        <div className="col-sm-12 col-md-6 ">
          <AboutCard
            bgColor="rgb(17, 73, 125)"
            title="Who We Are"
            description="Our large, diverse team of independent analysts are world leaders. They are experts in their fields, and through them, we are changing the way advice, analysis, and insight is provided. We don’t shy away from the hard topics, and we aren’t scared to traverse far from the beaten track. We want to change the world. Your world."
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <AboutCard
            title="Who We Are"
            description="Our large, diverse team of independent analysts are world leaders. They are experts in their fields, and through them, we are changing the way advice, analysis, and insight is provided. We don’t shy away from the hard topics, and we aren’t scared to traverse far from the beaten track. We want to change the world. Your world."
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <AboutCard
            bgColor="rgb(221, 51, 51)"
            title="Who We Are"
            description="Our large, diverse team of independent analysts are world leaders. They are experts in their fields, and through them, we are changing the way advice, analysis, and insight is provided. We don’t shy away from the hard topics, and we aren’t scared to traverse far from the beaten track. We want to change the world. Your world."
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <AboutCard
            bgColor="rgb(17, 73, 125)"
            title="Who We Are"
            description="Our large, diverse team of independent analysts are world leaders. They are experts in their fields, and through them, we are changing the way advice, analysis, and insight is provided. We don’t shy away from the hard topics, and we aren’t scared to traverse far from the beaten track. We want to change the world. Your world."
          />
        </div>
      </div>
      <SubHead>Founders</SubHead>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <InfoCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8tZYM8ZeB1XD0N1wyhop50HBucJuRH-Q_Js9qz7rZXZ0pTTMdZoeIbbBqC3e9SNGT8U&usqp=CAU"
            name="Thanos"
            position="Mad Titan"
            phone="+91 7895461320"
            email="thanos@titan.com"
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <InfoCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8tZYM8ZeB1XD0N1wyhop50HBucJuRH-Q_Js9qz7rZXZ0pTTMdZoeIbbBqC3e9SNGT8U&usqp=CAU"
            name="Thanos"
            position="Mad Titan"
            phone="+91 7895461320"
            email="thanos@titan.com"
          />
        </div>
      </div>

      <SubHead>Our Crew</SubHead>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <InfoCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8tZYM8ZeB1XD0N1wyhop50HBucJuRH-Q_Js9qz7rZXZ0pTTMdZoeIbbBqC3e9SNGT8U&usqp=CAU"
            name="Thanos"
            position="Mad Titan"
            phone="+91 7895461320"
            email="thanos@titan.com"
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <InfoCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8tZYM8ZeB1XD0N1wyhop50HBucJuRH-Q_Js9qz7rZXZ0pTTMdZoeIbbBqC3e9SNGT8U&usqp=CAU"
            name="Thanos"
            position="Mad Titan"
            phone="+91 7895461320"
            email="thanos@titan.com"
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <InfoCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8tZYM8ZeB1XD0N1wyhop50HBucJuRH-Q_Js9qz7rZXZ0pTTMdZoeIbbBqC3e9SNGT8U&usqp=CAU"
            name="Thanos"
            position="Mad Titan"
            phone="+91 7895461320"
            email="thanos@titan.com"
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <InfoCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8tZYM8ZeB1XD0N1wyhop50HBucJuRH-Q_Js9qz7rZXZ0pTTMdZoeIbbBqC3e9SNGT8U&usqp=CAU"
            name="Thanos"
            position="Mad Titan"
            phone="+91 7895461320"
            email="thanos@titan.com"
          />
        </div>
      </div>
      <JoinUs
        text="Lorem ipsum dolor"
        btnText="Subscribe"
        caption="Lorem ipsum dolor Lorem ipsum dolor"
      />
    </>
  );
};

export default About;

const Head = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 50px 0px;
`;

const SubHead = styled.h1`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin: 20px 0px;
  text-decoration: underline;
`;
