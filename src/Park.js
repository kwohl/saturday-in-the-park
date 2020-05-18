import React, {useState} from 'react';
import './Park.css';
import NavBar from './components/nav/Nav';
import ApplicationViews from './components/ApplicationViews';
import Home from './components/home/Home';

function Park() {

  
  const isAuthenticated = () => sessionStorage.getItem("activeUserId") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("activeUserId", JSON.stringify(user.id));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }






  return (
    <>
    <NavBar hasUser={hasUser} clearUser={clearUser} />
    <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
}

export default Park;
