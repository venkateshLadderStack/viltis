import styled from "styled-components";
import JoinUs from "../components/JoinUs";
import AboutCard from "../DS/AboutCard";
import InfoCard from "../DS/Infocard";

const About = () => {
  return (
    <div id="top">
      <div className="row">
        <Head>About Us</Head>
        <div className="col-sm-12 col-md-6 ">
          <AboutCard
            bgColor="rgb(17, 73, 125)"
            title="Who We Are"
            description="At Viltis, we wish to recreate the experience of warmth, safety and love for your dear ones. Viltis is everything you need when you think of medical & healthcare services at home. Our services include Patient Care at home & hospital, Nursing Services at home & hospital, Physiotherapists at home, ICU set up at home, Critical care and end - end home healthcare solutions. At Viltis we carefully choose people who are compassionate, empathetic and easily approachable. We are committed to quality in rendering home healthcare services for speedy patient recovery. Moreover, the services provided by us are timely executed, affordable and flexible."
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <AboutCard
            bgColor="rgb(221, 51, 51)"
            title="Why Viltis"
            description=" At Viltis we make sure that our Nurses, Physiotherapists, Doctors, Caretakers & all Healthcare Professionals provided by us are well-trained and specialized in their respective areas. The care of our customers is our highest priority, and we ensure that we provide a happy, safe and healthy environment."
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <AboutCard
            title="Our Misson"
            description=" Our Mission is to offer the highest possible quality home healthcare services to our clients as per their needs."
          />
        </div>

        {/* <div className="col-sm-12 col-md-6">
          <AboutCard
            bgColor="rgb(17, 73, 125)"
            title="Who We Are"
            description="Our large, diverse team of independent analysts are world leaders. They are experts in their fields, and through them, we are changing the way advice, analysis, and insight is provided. We don’t shy away from the hard topics, and we aren’t scared to traverse far from the beaten track. We want to change the world. Your world."
          />
        </div> */}
      </div>
      <SubHead>Our Team</SubHead>
      <div className="row">
        <div className="col-sm-12">
          <InfoCard
            imageUrl="https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
            name="Sandeep Kumar Cheriyala"
            position="Founder & Managing Director"
            phone="+91 7895461320"
            email="thanos@titan.com"
          />
        </div>
        <div className="col-sm-12">
          <InfoCard
            imageUrl="https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
            name="Ravi Pruthvi"
            position="Director"
            phone="+91 7895461320"
            email="thanos@titan.com"
          />
        </div>
      </div>

      <JoinUs
        text="Register Today "
        btnText="Register"
        caption="To let our family take care of yours."
      />
    </div>
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
