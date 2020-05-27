import React from "react";

import Navbar from "react-bootstrap/Navbar";

const Footer = (props) => {

  return (
    <>
      <Navbar bg="light" sticky="bottom" id="Footer">
        <p className="my-auto">Built by Hugo De Moraes © 2020</p>
      </Navbar>
    </>
  );
};

export default Footer;