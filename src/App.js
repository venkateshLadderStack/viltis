import { Route, Switch } from "react-router";
import styled from "styled-components";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaQuestionCircle,
} from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";
import Footebar from "./components/Footer";
import LogoImg from "./images/Viltis.png";
import useWindowSize from "./hooks/useWindowSize";
import "./styles.css";

export default function App() {
  const { width } = useWindowSize();

  return (
    <Wrapper className="container-fluid">
      <Nav className="row">
        <div className="col-8">
          <Link to="/">
            <LogoWrapper>
              <Logo src={LogoImg} alt="" />
            </LogoWrapper>
          </Link>
        </div>
        <Corner className="col-4">
          <ContactBtn>
            <p>
              <Link to="/contact">
                Queires <FaQuestionCircle />
              </Link>
            </p>
          </ContactBtn>
        </Corner>
      </Nav>
      <SmallNav>
        <Links>
          <NavLink to="/about" activeClassName="active_link">
            About Us
          </NavLink>
          <NavLink to="/service" activeClassName="active_link">
            Our Services
          </NavLink>
          <NavLink to="/contact" activeClassName="active_link">
            Contact Us
          </NavLink>
        </Links>
      </SmallNav>
      <Switch>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/service" exact>
          <Service />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footebar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
`;

const Nav = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const Icons = styled.div`
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
`;

const LogoWrapper = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 120px;
  object-fit: contain;
`;

const ContactBtn = styled.div`
  width: 150px;
  height: 125px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Corner = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  & p {
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
  }

  & p a {
    text-decoration: none;
    color: white;
  }
`;

const SmallNav = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
  background: #f4f5f4;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    margin: 0px 40px;
    
  }

  @media screen and (max-width: 767px) {
  a {
    font-size: 18px;
    font-weight: 600;
    margin: 0px 10px;
  }
}
 }
`;
