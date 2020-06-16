import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';
import image from './images/BOREDLEARNER.jpg';




class Quote3 extends Component {
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
                                    <h4>What do we mean by interaction?</h4>
                                    <div className="row no-gutters speaker-left">


                                            <div className="speech-bubble">
                                                <div className="row no-gutters">

                                                    <div className="col">
                                                        <p>One hour of fully interactive elearning can take between 100 and 700 hours to develop with a team of instructional designers, subject matter experts, graphic designers, animators, voice over artists, and developers -not including quality assurance by external bodies.</p>
                                                    </div>
                                                </div>
                                            </div>

                                    </div>

                                </div>
                                <br/>


                                <div className="row no-gutters act-end-nav justify-content-end">


                                    <div className="col-12 col-sm-auto order-sm-3 ">

                                        <button className="act-prev bg-success " aria-pressed="true"><span
                                            className="direction-icon" onClick={()=>this.setState({location: '/img2',redirectFlag: true})}/>
                                        </button>

                                    </div>

                                    <div className="col-12 col-sm-auto order-sm-3 ">

                                        <button className="act-next bg-success " aria-pressed="true"><span
                                            className="direction-icon" onClick={()=>this.setState({location: '/fin',redirectFlag: true})}/>
                                        </button>

                                    </div>

                                    {this.state.redirectFlag ? <Redirect to={this.state.location}/> : console.log("nothing")}

                                </div>
                            </div>
                        </div>

                    </div>
                    {this.state.redirectFlag ? <Redirect to={this.state.location}/> : console.log("nothing")}

                </div>
            </section>

        );
    }
}





export default Quote3;
