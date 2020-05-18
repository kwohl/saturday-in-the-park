import React, { useState } from "react"
import ParkManager from '../../modules/ParkManager'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const setUser = props.setUser;

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials }
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange)
    };

    const handleLogin = (evt) => {
        evt.preventDefault()
        if (credentials.username === "" || credentials.password === "") {
            window.alert("Please fill in all fields.")
        } else {
            ParkManager.getCustomers().then(customers => {
                if (customers.find(customer => customer.username === credentials.username) && customers.find(customer => customer.password === credentials.password)) {
                    const customer = customers.find(customer => customer.password === credentials.password)
                    
                    setUser(customer)
                    
                    props.history.push("/ ")
                } else {
                    window.alert("Invalid username or password")
                }
            })
        }
    };

    return (
        <form>
            <fieldset>
                <h2>Sign In</h2>
                <div>
                    <input onChange={handleFieldChange} type="text" id="username" 
                    placeholder="Username" />

                    <input onChange={handleFieldChange} type="text" id="password" 
                    placeholder="Password" />
                </div>
                <button type="submit" onClick={handleLogin}>Log In</button>
            </fieldset>
        </form>
    );
}

export default Login;