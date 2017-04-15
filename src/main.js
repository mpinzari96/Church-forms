//"use strict";

$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homepage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header'); 
var Authors = require('./components/authors/authorPage');
var Inprogress = require('./components/about/InprogressPage');
var Completed = require('./components/about/completedPage');
var New = require('./components/about/newPage');
var App = React.createClass({
    render: function() {
        var Child;

        switch(this.props.route) {
            case 'about': Child = About; break;
            case 'inprogress': Child = Inprogress; break;
            case 'completed': Child = Completed; break;
            case 'authors': Child = Authors; break;
            case 'new': Child = New; break;

            default: Child = Home;
        }
        return (
            <div>
                <Header/>
                <Child/>
                </div>
        );
    }
});



function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}


window.addEventListener('hashchange', render);
render();

