import { Route } from "react-router-dom";
import React from "react";
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Itinerary from "./itinerary/Itinerary";


const ApplicationViews = (props) => {
       
    return (
        <>
        <Route path="/ " render={props => {
            return <Home { ...props }/> 
        }}/>
        <Route path="/itinerary" render={props => {
            return <Itinerary { ...props }/>   
        }}/>
        <Route path="/login" render={props => {
            return <Login { ...props }/> 
        }}/>
        <Route path="/register" render={props => {
            return <Register { ...props }/>   
        }}/>
        </>
    );
}

export default ApplicationViews;