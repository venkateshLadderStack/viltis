import styled from "styled-components";
import { useField } from "formik";
import React from "react";

export const CustomField = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <StyledInput {...field} {...props} />

      {meta.touched && meta.error ? (
        <p
          style={{
            color: "red",
            fontWeight: "lighter",
            fontSize: "12px",
            textAlign: "center"
          }}
        >
          {meta.error.toUpperCase()}
        </p>
      ) : null}
    </>
  );
};

export const CustomTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <StyledTextArea {...field} {...props} />

      {meta.touched && meta.error ? (
        <p
          style={{
            color: "red",
            fontWeight: "lighter",
            fontSize: "12px",
            textAlign: "center"
          }}
        >
          {meta.error.toUpperCase()}
        </p>
      ) : null}
    </>
  );
};

const StyledInput = styled.input`
  border: 2px solid black;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
  padding-left: 10px;
`;

const StyledTextArea = styled.textarea`
  border: 2px solid black;
  width: 100%;
  line-height: 50px;
  margin-top: 20px;
  padding-left: 10px;
`;
