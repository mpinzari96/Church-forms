"use strict";

var React = require('react');
//import styles from './newPge.css';
var New = React.createClass({
    render: function() {
        return (
          
 

            <form>
            <h1> Please fill out the following information</h1>
            <label htmlFor="firstName">First Name</label>
            <input type="text" 
            name="firstname"
            className="form-control"
            placeholder="Enter First Name"
            maxLength="12"

             />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" 
            name="lastName"
            className="form-control"
            placeholder="Enter Last Name"
            maxLength="12" 
            />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="numbers"
            name="phoneNumber"
            className="form-control"
            placeholder="Enter Phone #"
            maxLength="10"
            />

            <label htmlFor="emailAddress">E-mail Address</label>
            <input type="text"
            name="emailAddress"
            className="form-control"
            placeholder="Enter E-mail Address"
            maxLength="20"
            />
            
           <input type="submit" value="SUBMIT" className="btn btn-primary" />
        </form>

            
        );
    }
});



module.exports = New; 