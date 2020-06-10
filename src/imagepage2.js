import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';
import image from './images/2The_Oak_National_Academy_launched_today_having_been_created_by_4-a-1_1587402727278.jpg';




class Image2 extends Component {
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


                                <h4>And this?</h4>

                                <img src = {image}></img>



                            <p>Government- Backend Oak National Academy produced 140 'online' lessons in two weeks</p>

                                <br/>

                                <button type="button" className="navbtn next"
                                        onClick={()=>{this.setState({location: '/img',redirectFlag: true});}}>
                                    &#60;
                                </button>

                                <button type="button" className="navbtn next"
                                        onClick={()=>{this.setState({location: '/page',redirectFlag: true});}}>
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




export default Image2;
