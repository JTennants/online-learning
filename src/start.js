import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';
import MatchingPairs from "./matchingpairs";

class Start extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: "Are you sure? Go on - have some fun while you learn!",
            yesoption: "Yes, take me to the article",
            nooption: "No, play the game",
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
                                        <h1>{this.state.isClicked ? this.state.message : "What would you rather do?"}</h1>
                                        <div className="container-fluid">
                                         {/*   <div className="row  text-center mb-4">
                                                <div className="col-12">
                                                    <div className="passage">
                                                        <p><b>Tim:</b> So what happened last night then?</p>
                                                        <p><b>Daisy:</b> Well we went to see an interesting piece of
                                                            contemporary theatre, drank an enormous amount of free wine,
                                                            ate our body-weight in Twiglets and you punched an artist in
                                                            the face.</p>
                                                        <p><b>Tim:</b> Sh*t, I'm not supposed to eat Twiglets.</p>
                                                        <p><b>Daisy:</b> Why not?</p>
                                                        <p><b>Tim:</b> They make me violent.</p>
                                                    </div>
                                                </div>
                                            </div>*/}
                                            <div className="row text-center">

                                                <div className="col-md-6">

                                                    <div className="act-panel">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-auto hidden">
                                                                <button className="button-audio mr-2"></button>
                                                            </div>
                                                            <div className="col full-width-button-container">
                                                                <button className="button-lg responsive m-0" onClick={  () => this.setState({isClicked: !this.state.isClicked}) } > {this.state.isClicked ? <a href="https://www.learnupon.com/blog/elearning-glossary/" style={{color: 'white'}}> {this.state.yesoption} </a>  : "Click this link for a 14 page article on e-learning terminology?"}
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
                                                                <Link to="/matchingpairs"> <button className="button-lg responsive m-0"> {this.state.isClicked ? this.state.nooption : "Play a game?"}
                                                                </button> </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>


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
