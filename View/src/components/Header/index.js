import React from "react";
import SearchBar from "./SearchBar/index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = (props) => {
  const { getSuggestionsAPI, cityList, onSuggestionSelected } = props;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand id="Brand" href="#home">Weatherly</Navbar.Brand>
            <Nav.Link href="https://github.com/demoraeshugo/Weather_App">
              Github
            </Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="http://demoraeshugo.com/">
                Personal Website
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="http://demoraeshugo.com/Images/Hugo_Resume.pdf">Resume</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <SearchBar
          cityList={cityList}
          getSuggestionsAPI={getSuggestionsAPI}
          onSuggestionSelected={onSuggestionSelected}
        ></SearchBar>
      </Navbar>
    </>
  );
};

export default Header;
