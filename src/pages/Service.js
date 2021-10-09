import React from "react";
import styled from "styled-components";
import JoinUs from "../components/JoinUs";
import ServiceCardLeft from "../DS/ServiceCardLeft";
import ServiceCardRight from "../DS/ServiceCardRight";
import Patient from "../images/old2.png";
import Old from "../images/old.png";
import Nurse from "../images/nurse.png";
import Test from "../images/test.png";
import Child from "../images/child.png";
import Medical from "../images/medical.png";
import Heart from "../images/heart.png";
import Ambulane from "../images/ambulace.png";

const Service = () => {
  return (
    <div id="top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ServiceCardLeft
              id="patient-care-attendants"
              imageUrl={Patient}
              title={"Patient Care Attendants"}
              description={
                "Our Trained Patient Care Attendants​ offer daily support to patients at home. Caretaker or Attendant will help with personal grooming, hygiene, Medication, Walking & Exercises. With the help of this service, we try to make sure the patients will be able to function independently within the comfort of home."
              }
              description2={
                "Hiring a medically trained attendant would provide perfect care and caution to the person who shall be needful, as a result they can be treated and taken care with way more sincerity and in a prestigious approach. Viltis will be bestowing you with the most proven and reliable healthcare service at home."
              }
            />
          </div>
          <Line />
          <div className="col-12">
            <ServiceCardRight
              id="home-nursing"
              imageUrl={Nurse}
              title={"Home Nursing Services"}
              description={
                "The need for home nursing service is uncertain, it does not come with a knock or warning. But, Viltis is always alert on behalf of you; we stand a round of clock just to serve you with the best nursing care at home."
              }
              description2={
                "Our In-Home Nursing service helps you to get personalized nursing care at your home as provided in a hospital while being more compassionate towards the patient helps to heal early. We offer unmatched Short term and Long Term Nursing care service at home in our serving locations."
              }
            />
          </div>
          <Line />
          <div className="col-12">
            <ServiceCardLeft
              id="elderly-care"
              imageUrl={Old}
              title={"Elderly Care"}
              description={
                "Every child wants to be there for their parents at their old age amidst their hectic schedule. It becomes very difficult to handle this as some of them stay far away from their parents. The reason why senior home care services are recommended is that the care given is personalized and the caretakers, nurses, caregivers are certified and trained in the service of caregiving. "
              }
              description2={
                "Our elderly care service helps your elderly loved ones who need support and help in their day-to-day activities, we give them the care and compassion with the dignity they deserve. Our Elderly Care is designed to get overall care including healthcare solutions for all ageing needs."
              }
            />
          </div>
          <Line />
          <div className="col-12">
            <ServiceCardRight
              id="physiotherapy"
              imageUrl={Test}
              title={"Physiotherapy"}
              description={
                "We understand your needs both incase of physical ailments as well as mental health. Physiotherapy has a wide range of specialties and people can take physiotherapy for Neurological issues, Neuromusculoskeletal, Cardiovascular and Respiratory. "
              }
              description2={
                "Our team consists of highly trained Physiotherapists to help you at your home regain mobility. They are certified and experienced in providing effective care and pain management with electrotherapy. In addition to the effective physiotherapy sessions at home, they will also help you in gaining movement ranges and muscular strength through regular monitoring and feedback."
              }
            />
            <Line />
            <ServiceCardLeft
              id="infant-and-newborn-care"
              imageUrl={Child}
              title="Infant and Newborn Care"
              description={
                "If you are becoming a parent and worried about your newborn. You're not alone. Lots of new parents feel unprepared when it's time to bring their new babies home from the hospital. We can help you to get ready for the transition home."
              }
              description2={
                "We totally understand and agree with the fact that hiring someone for your little bundle of joy is a sensitive decision to make. Therefore, we assert that the attendants and nurses of Viltis are 100% verified and have got all the essential certifications. They are already professions in the province of baby care but still, we tutor them more and more for effective services."
              }
            />
            <Line />
            <ServiceCardRight
              id="diagnostic"
              imageUrl={Medical}
              title="Diagnostic Services"
              description={
                "Our Diagnostic services are a form of an essential component of modern healthcare services as getting regular check-ups and lab tests are convenient at home which is backed up by comprehensive quality standards and wide range medical testing. Getting a lab test at home makes it a lot easier for the patient as well and has many advantages. Viltis is amongst the noted service providers of diagnostic services at home. Our team of trained and medically acclaimed attendants visits to collect samples and follow up for the tests."
              }
              description2={""}
            />
            <Line />
            <ServiceCardLeft
              id="medical-equipments"
              imageUrl={Heart}
              title="Medical Equipments"
              description={
                "With Viltis, buying and renting of medical equipment is made easily accessible for you at your doorstep. Being associated with top vendors of medical equipment, we provide home medical equipment on a buying & rental basis for long term/short term use."
              }
              description2={
                "A detailed list of medical equipment in which we deal includes the following:-"
              }
              others={
                <ul>
                  <li>Hospital Bed</li>
                  <li>Syringe Pump</li>
                  <li>Suction Machine</li>
                  <li>Oxygen Concentrator</li>
                  <li>Wheel Chair</li>
                  <li>BIPAP/C-PAP Devices</li>
                  <li>Ventilators etc.,</li>
                </ul>
              }
            />
            <Line />
            <ServiceCardRight
              id="ambulance"
              imageUrl={Ambulane}
              title="Ambulance Services"
              description={
                "Viltis provides 24/7 service and acknowledges the need for an ambulance provider that is committed to clinically traumatic patients during transport. Our mission is to provide patients with professional caring transports while maintaining high standards. Our team ensures that all calls are answered so that you get real-time updates. We strive to meet exclusive ambulance service while never compromising the safety of our patients. By focusing our efforts, we are best positioned to understand and serve the needs of our communities."
              }
              description2={""}
            />
          </div>
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

export default Service;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid grey;
  opacity: 0.7;
`;
