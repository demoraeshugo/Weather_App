import React from 'react';
import {configure, shallow}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Body from "../Body/index";

configure({adapter: new Adapter()})