import React from "react";
import styled from "styled-components";
import JoinUs from "../components/JoinUs";
import ServiceCardLeft from "../DS/ServiceCardLeft";
import ServiceCardRight from "../DS/ServiceCardRight";

const Service = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ServiceCardLeft
              imageUrl={
                "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              }
              title={"Service Name"}
              subTitle={"Some sub title about service"}
              description={
                "Do you want your organization to be better, faster, stronger, and more effective? So do we. You are at the heart of everything we do. If your organization is facing huge challenges, competition, and changes, you are our why. You need to think outside the status quo in order to succeed. We will help you."
              }
            />
          </div>
          <Line />
          <div className="col-12">
            <ServiceCardRight
              imageUrl={
                "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              }
              title={"Service Name"}
              subTitle={"Some sub title about service"}
              description={
                "Do you want your organization to be better, faster, stronger, and more effective? So do we. You are at the heart of everything we do. If your organization is facing huge challenges, competition, and changes, you are our why. You need to think outside the status quo in order to succeed. We will help you."
              }
            />
          </div>
          <Line />
          <div className="col-12">
            <ServiceCardLeft
              imageUrl={
                "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              }
              title={"Service Name"}
              subTitle={"Some sub title about service"}
              description={
                "Do you want your organization to be better, faster, stronger, and more effective? So do we. You are at the heart of everything we do. If your organization is facing huge challenges, competition, and changes, you are our why. You need to think outside the status quo in order to succeed. We will help you."
              }
            />
          </div>
          <Line />
          <div className="col-12">
            <ServiceCardRight
              imageUrl={
                "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              }
              title={"Service Name"}
              subTitle={"Some sub title about service"}
              description={
                "Do you want your organization to be better, faster, stronger, and more effective? So do we. You are at the heart of everything we do. If your organization is facing huge challenges, competition, and changes, you are our why. You need to think outside the status quo in order to succeed. We will help you."
              }
            />
          </div>
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

export default Service;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid grey;
  opacity: 0.7;
`;
