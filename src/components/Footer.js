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
            Healthcare Pvt. Ltd
          </Brand>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
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
            <strong>Hyderabad</strong> <br /> Address: Viltis healthcare Pvt
            Ltd.
            <br /> Plot No: 99,
            <br />
            Ganesh Nagar,Chengicherla,
            <br /> Hyderabad- 500098
            <br />
            <br />
            <strong>Delhi</strong> <br /> Address: Viltis healthcare Pvt Ltd.{" "}
            <br />
            Flat 209,
            <br /> Ruchi Towers Chattarpur.
            <br /> Delhi - 110074
            <br />
            <br />
            <strong>Email Id</strong>:{" "}
            <a href="mailto: viltishelathcare@gmail.com">
              viltishelathcare@gmail.com
            </a>
            <br />
            <strong>Phone</strong>:{" "}
            <a href="tel:+91- 9398255792"> +91- 9398255792</a>
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
                <HashLink to="/service#ambulance">Ambulance</HashLink>
              </ServiceInfo>
            </div>
            <div className="col-6">
              <Address>Links</Address>
              <ServiceInfo>
                <Link to="/">Home</Link>
                <br />
                <Link to="/about">About Us</Link>
                <br />
                <Link to="/service">Our Services</Link>
                <br />
                <Link to="/contact">Contact Us</Link>
              </ServiceInfo>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <Copy>
            copyright &copy;2021. Viltis Health Group. All rights reserved.
          </Copy>
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
