"use strict";

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
  
            
            <nav 
            className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="nav-brand">
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/#about">TO DO</a></li>
                        <li><a href="/#inprogress">IN PROGRESS</a></li>
                        <li><a href="/#completed">COMPLETED</a></li>
                        <li><a href="/#authors">Authors</a></li>
                     {/*  <li><a href="/#new">NEW</a></li> */}
                        </ul>
                        </div>
                        
                </nav> 
        );
    }
});

module.exports = Header;