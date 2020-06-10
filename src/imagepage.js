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

                                <button type="button" className="navbtn next"
                                        onClick={()=>{this.setState({location: '/draganddrop',redirectFlag: true});}}>
                                    &#60;
                                </button>

                                <button type="button" className="navbtn next"
                                        onClick={()=>{this.setState({location: '/img2',redirectFlag: true});}}>
                                    &#62;
                                </button>
                            </div>


                        </div>

                        {this.state.redirectFlag ? <Redirect to={this.state.location}/> : console.log("nothing")}

                    </div>

                </div>


            </section>

        );
    }
}




export default Image;
