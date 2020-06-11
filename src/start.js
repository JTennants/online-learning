import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';
import MatchingPairs from "./matchingpairs";

class Start extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirectFlag: false,
            isClicked: false,
        }
    }


    render()
    {
        console.log(this.state.isClicked);
        return(
            <div className="App">

                <br/>
                <section>
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <section id="activityContent">
                                    <div className="contentBox">
                                        <h1>{this.state.isClicked ? "Are you sure? Go on - have some fun while you learn!" : "What would you rather do?"}</h1>
                                        <div className="container-fluid">
                                            <div className="row text-center">

                                                <div className="col-md-6">

                                                    <div className="act-panel">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-auto hidden">
                                                                <button className="button-audio mr-2"></button>
                                                            </div>
                                                            <div className="col full-width-button-container">
                                                                <button className="button-lg responsive m-0" onClick={()=> {if(this.state.isClicked){this.setState({redirectFlag: true})} else{this.setState({isClicked: !this.state.isClicked})}}   } > {this.state.isClicked ? "Yes, take me to the article."  : "Click this link for a 14 page article on e-learning terminology?"}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="act-panel">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-auto hidden">
                                                                <button className="button-audio mr-2"></button>
                                                            </div>
                                                            <div className="col full-width-button-container">
                                                                <Link to="/matchingpairs"> <button className="button-lg responsive m-0"> {this.state.isClicked ? "No, play the game" : "Play a game?"}
                                                                </button> </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        {this.state.redirectFlag ? <Route exact path="/" render={() => (window.location = "https://www.learnupon.com/blog/elearning-glossary/")} />: console.log("nothing")}
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>
                </section>


            </div>
        );
    }
}



export default Start;
