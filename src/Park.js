import React from 'react';
import logo from './logo.svg';
import './Park.css';
import NavBar from './components/nav/Nav';
import ApplicationViews from './components/ApplicationViews';
import Home from './components/home/Home'

function Park() {
  return (
    <>
    <NavBar />
    <ApplicationViews />
    </>
  );
}

export default Park;
