import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  let { state } = useLocation();
  return (
    <>
      <h1>Contact</h1>
      <h2>Email : {state?.email}</h2>
      <h2>Phone : {state?.phone}</h2>
    </>
  );
};

export default Contact;
