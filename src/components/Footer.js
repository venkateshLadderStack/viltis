import styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footebar() {
  return (
    <>
      <Footer className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 my-4">
          <Brand>Vitis Health Group</Brand>
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
          <Address>Reach us</Address>
          <AddressInfo>
            Hyderabad, Telangana <br />
            500001
          </AddressInfo>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <Links>
            <Link to="/about">About Us</Link>
            <Link to="/service">Our Services</Link>
            <Link to="/contact">Contact Us</Link>
          </Links>
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
  background: black;
  color: white;
  padding: 40px 15px;
`;

const Brand = styled.h2`
  font-size: 32px;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
`;

const Address = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const AddressInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
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
