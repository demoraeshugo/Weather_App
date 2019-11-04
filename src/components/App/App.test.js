import React from 'react';
import {configure, shallow}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Body from "../Body/index";
import App from "./App";

configure({adapter: new Adapter()})

describe("App component", () => {
    it("Passes props to children", () => {

    })
}) 


