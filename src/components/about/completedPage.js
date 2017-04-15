"use strict";

var React = require('react');

var Completed = React.createClass({
    render: function() {
        return (  
           <div>
            <h1>This is the in progress page</h1>
            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    </table>
            </div>
        );
    }

});

module.exports = Completed;