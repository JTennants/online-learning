import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';
import image from './images/BOREDLEARNER.jpg';




class Quote2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirectFlag: false,
            location: null,
        }
    }
    render()
    {
        return(
            <section>
                <div className="container-fluid">
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <div className="act-panel">

                                <div className="speech-bubbles-container with-text one-sided">
                                    <h4>What about uploading assignments, videos, weblinks, quizzes?</h4>
                                    <div className="row no-gutters speaker-left">
                                        <div className="col-auto thumbnail-container">
                                            <img src="https://k2l.bndry.co.uk/basicskills/img/conversations/thumbnails/aisha-left.png" class="thumbnail"/>
                                        </div>
                                        <div className="col speech-bubble-container with-text">
                                            <div className="speech-bubble">
                                                <div className="row no-gutters">
                                                    <div className="col-12 col-sm-auto">

                                                    </div>
                                                    <div className="col">
                                                        <p>So far the assignments have been a mishmash of tasks, quizzes, and articles accross multiple sites with very little structure and inconsistency accross subjects.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p>Student commenting on post-Covid learning online</p>
                                </div>
                                <br/>

                                <button type="button" className="navbtn next"
                                        onClick={()=>{this.setState({location: '/info',redirectFlag: true});}}>
                                    &#60;
                                </button>

                                <button type="button" className="navbtn next"
                                        onClick={()=>{this.setState({location: '/draganddrop',redirectFlag: true});}}>
                                    &#62;
                                </button>
                            </div>
                        </div>

                    </div>
                    {this.state.redirectFlag ? <Redirect to={this.state.location}/> : console.log("nothing")}

                </div>
            </section>

        );
    }
}





export default Quote2;
