import { Formik, Form } from "formik";
import styled from "styled-components";
import { CustomField, CustomTextArea } from "../components/CustomFields";
import * as Yup from "yup";
import Button from "../DS/Button";
import JoinUs from "../components/JoinUs";

const Contact = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <div id="top">
      <Head>Contact Us</Head>
      <ContactWrapper className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h3 className="my-4">Address</h3>
              <p>
                <strong>Hyderabad</strong> <br /> Address: Viltis healthcare Pvt
                Ltd.
                <br /> Plot No: 99,
                <br />
                Ganesh Nagar,Chengicherla,
                <br /> Hyderabad- 500098
              </p>

              <p>
                <strong>Delhi</strong> <br /> Address: Viltis healthcare Pvt
                Ltd. <br />
                Flat 209,
                <br /> Ruchi Towers Chattarpur.
                <br /> Delhi - 110074
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h3 className="my-4">General Information</h3>
              <p>
                <strong>Email Id</strong>:{" "}
                <a href="mailto: viltishelathcare@gmail.com">
                  viltishelathcare@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone</strong>:{" "}
                <a href="tel:+91- 9398255792"> +91- 9398255792</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Formik
            initialValues={{
              name: "",
              number: "",
              email: "",
              message: "",
              file: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(2, "name is too sort")
                .max(30, "must be 15 character or less")
                .required("enter you your full name"),
              number: Yup.string()
                .max(10, "mobile number should be 10 digit")
                .matches(phoneRegExp, "Phone number is not valid")
                .required("phone number is required"),
              email: Yup.string()
                .email("invalid email")
                .required("email is required"),
              message: Yup.string()
                .min(10, "message need to be more than 10 characters")
                .required("this field is required"),
              file: Yup.mixed().optional(),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {}}
          >
            {() => (
              <Form>
                <CustomField
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  label="Full Name"
                />

                <CustomField
                  type="text"
                  placeholder="Mobile number"
                  name="number"
                  label="Mobile"
                />

                <CustomField
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  label="E-mail"
                />

                <CustomTextArea
                  name="message"
                  id=""
                  cols="10"
                  rows="3"
                  placeholder="Enter Your Message"
                  label="Message"
                />

                <div className="mt-4 d-flex justify-content-center">
                  <Button type="submit" width={"200"}>
                    Send
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ContactWrapper>
    </div>
  );
};
export default Contact;

const ContactWrapper = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M17 250L267 0L556.5 0L306.5 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M274.6 250L524.6 0L818.6 0L568.6 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M512.2 250L762.2 0L879.2 0L629.2 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M745.8000000000001 250L995.8000000000001 0L1246.3000000000002 0L996.3000000000001 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M1434 250L1184 0L1131.5 0L1381.5 250z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M1200.4 250L950.4000000000001 0L662.4000000000001 0L912.4000000000001 250z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M934.8 250L684.8 0L414.79999999999995 0L664.8 250z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M699.1999999999999 250L449.19999999999993 0L264.69999999999993 0L514.6999999999999 250z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M1290.018712643683 250L1440 100.01871264368319L1440 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M0 250L149.9812873563168 250L 0 100.01871264368319z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1004'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1005'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
`;

const Head = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 50px 0px;
`;

const ContactText = styled.div`
  text-align: center;
  padding: 30px 30px 0px 30px;
  color: grey;

  & p {
    font-size: 16px;
    font-weight: 400;
  }
`;
