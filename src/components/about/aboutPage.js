"use strict";

var React = require('react');

var About = React.createClass({
    render: function () {
    return (
        <div>
            <div className='jumbotron'>
                
        <h1>About</h1>
        </div>
        <p>
        This application uses the following technologies:
        <ul>
        <li>React</li>
        <li>ReactRouter</li>
        <li>Flux</li>
        <li>Node</li>
        </ul>
        </p>
        </div>

    );
} 

});

module.exports = About;