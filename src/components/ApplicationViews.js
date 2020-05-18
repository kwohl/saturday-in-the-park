import { Route } from "react-router-dom";
import React from "react";
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Itinerary from "./itinerary/Itinerary";


const ApplicationViews = (props) => {
    const setUser = props.setUser;
    const hasUser = props.hasUser;

    return (
        <>
        <Route path="/ " render={props => {
            return <Home { ...props }/> 
        }}/>
        <Route path="/myitinerary" render={props => {
            return <Itinerary { ...props }/>   
        }}/>
        <Route path="/login" render={props => {
            return <Login setUser={setUser} { ...props }/> 
        }}/>
        <Route path="/register" render={props => {
            return <Register setUser={setUser} { ...props }/>   
        }}/>
        </>
    );
}

export default ApplicationViews;