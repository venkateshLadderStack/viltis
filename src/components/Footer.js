import styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footebar() {
  return (
    <>
      <Footer className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 my-4">
          <Brand>
            <p>VILTIS</p>
            HEALTHCARE PVT. LTD.
          </Brand>
          <Info>
            Viltis is committed to quality in rendering home healthcare services
            for speedy patient recovery and We wish to create the experience of
            warmth,safety & love for your dear ones.
          </Info>
          <Icons>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </Icons>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-4 d-flex flex-column justify-content-center aligm-items-center">
          <Address>Contact</Address>
          <AddressInfo>
            <strong>Hyderabad</strong> <br /> Address: Viltis Healthcare Pvt.
            Ltd.
            <br /> Plot No: 99,
            <br />
            Ganesh Nagar,Chengicherla,
            <br /> Hyderabad- 500098
            <br />
            <br />
            <strong>Delhi</strong> <br /> Address: Viltis Healthcare Pvt. Ltd.{" "}
            <br />
            Flat 209,
            <br /> Ruchi Towers Chattarpur.
            <br /> Delhi - 110074
            <br />
            <br />
            <strong>Email Id</strong>:{" "}
            <a href="mailto: viltishealthcare@gmail.com">
              viltishealthcare@gmail.com
            </a>
            <br />
            <strong>Phone</strong>:{" "}
            <a href="tel:+919381951938"> +91-9381951938</a>
            <br />
            <a
              style={{
                paddingLeft: "53px",
              }}
              href="tel:+919346695760"
            >
              {" "}
              +91-9346695760
            </a>
          </AddressInfo>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="row">
            <div className="col-6">
              <Address>Services</Address>
              <ServiceInfo>
                <HashLink to="/service#patient-care-attendants">
                  Patient Care Attendants
                </HashLink>
                <br />
                <HashLink to="/service#home-nursing">
                  Home Nursing Services
                </HashLink>
                <br />
                <HashLink to="/service#elderly-care">Elderly Care</HashLink>
                <br />
                <HashLink to="/service#physiotherapy">Physiotherapy</HashLink>
                <br />
                <HashLink to="/service#infant-and-newborn-care">
                  Infant and Newborn Care
                </HashLink>
                <br />
                <HashLink to="/service#diagnostic">
                  Diagnostic Services
                </HashLink>
                <br />
                <HashLink to="/service#medical-equipments">
                  Medical Equipments
                </HashLink>
                <br />
                <HashLink to="/service#ambulance">Ambulance Services</HashLink>
              </ServiceInfo>
            </div>
            <div className="col-6">
              <Address>Links</Address>
              <ServiceInfo>
                <HashLink to="/#top">Home</HashLink>
                <br />
                <HashLink to="/about#top">About Us</HashLink>
                <br />
                <HashLink to="/service#top">Our Services</HashLink>
                <br />
                <HashLink to="/contact#top">Contact Us</HashLink>
              </ServiceInfo>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <Copy>@2021 All Rights Reserved. Viltis Healthcare Pvt. Ltd.</Copy>
        </div>
      </Footer>
    </>
  );
}

const Footer = styled.div`
  width: 100%;
  background: #2475c9;
  color: white;
  padding: 40px 15px;
`;

const Brand = styled.div`
  font-size: 20px;
  font-weight: 600;

  & p {
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
`;

const Address = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const AddressInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;

  & a {
    color: white;
    text-decoration: none;
  }
`;

const ServiceInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;

  & a {
    color: white;
    text-decoration: none;
  }
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

const Copy = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 20px;
`;

const Icons = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding-top: 100px;
  }

  @media screen and (max-width: 767px) {
    a {
      padding-top: 20px;
    }
  }
`;
