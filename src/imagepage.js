import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';
import image from './images/BOREDLEARNER.jpg';




class Image extends Component {
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


                                    <h4>How can we avoid this?</h4>

                                        <img src = {image}></img>

                                <br/>



                                <div className="row no-gutters act-end-nav justify-content-end">


                                    <div className="col-12 col-sm-auto order-sm-3 ">

                                        <button className="act-prev bg-success " aria-pressed="true"><span
                                            className="direction-icon" onClick={()=>this.setState({location: '/draganddrop',redirectFlag: true})}/>
                                        </button>

                                    </div>

                                    <div className="col-12 col-sm-auto order-sm-3 ">

                                        <button className="act-next bg-success " aria-pressed="true"><span
                                            className="direction-icon" onClick={()=>this.setState({location: '/img2',redirectFlag: true})}/>
                                        </button>

                                    </div>

                                    {this.state.redirectFlag ? <Redirect to={this.state.location}/> : console.log("nothing")}

                                </div>


                            </div>


                        </div>


                    </div>

                </div>


            </section>

        );
    }
}




export default Image;
