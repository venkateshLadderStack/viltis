import styled from "styled-components";
import JoinUs from "../components/JoinUs";
import AboutCard from "../DS/AboutCard";
import InfoCard from "../DS/Infocard";
import Member2 from "../images/member_1.jpg";
import Member1 from "../images/member-2.jpg";

const About = () => {
  return (
    <div id="top">
      <div className="row">
        <Head>About Us</Head>

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
        <div className="col-sm-12">
          <AboutCard
            bgColor="rgb(17, 73, 125)"
            title="Who We Are"
            description="At Viltis, we wish to recreate the experience of warmth, safety and love for your dear ones. Viltis is everything you need when you think of medical & healthcare services at home. Our services include Patient Care at home & hospital, Nursing Services at home & hospital, Physiotherapists at home, ICU set up at home, Critical care and end - end home healthcare solutions. At Viltis we carefully choose people who are compassionate, empathetic and easily approachable. We are committed to quality in rendering home healthcare services for speedy patient recovery. Moreover, the services provided by us are timely executed, affordable and flexible."
          />
        </div>
      </div>
      <SubHead>Our Team</SubHead>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <InfoCard
            imageUrl={Member1}
            name="Sandeep Kumar Cheriyala"
            position="Founder & Managing Director"
            description="Sandeep Kumar Cheriyala is an entrepreneur focusing mainly in the Healthcare Service Industry and a Human Resources Professional with significant experience in Human Resources & Healthcare Services."
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <InfoCard
            imageUrl={Member2}
            name="Ravi Pruthvi"
            position="Director"
            description="Ravi Pruthvi comes with extensive leadership experience in Market Analysis & moreover passionately committed to transforming Healthcare system through his ideology."
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
