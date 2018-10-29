import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../components/blog/blog.css';
import { NavBar } from './../navBar/navbar';

export class Blog extends React.Component {
    render() {
        return (
            <div class="blogBox">
                <div class="container-fluid main-container">
                    <div class="jumbotron">
                        <h1 id="blogTitle" class="text-rigth">Blog Title</h1>
                        <hr></hr>
                        
                    </div>
                </div>
            </div>
        );
    };
}