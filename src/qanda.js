import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';




class QandA extends Component {

    constructor(props) {
        super(props);
        var items =  [{
            "image": "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_960_720.png",
            "name": "Microsoft Teams",
            "correct": false,
            "highlight": []
        },
            {
                "image": "https://cdn.pixabay.com/photo/2015/07/16/07/03/icons-847262_960_720.png",
                "name": "Skype",
                "correct": false,
                "highlight": []
            },
            {
                "image": "https://cdn.pixabay.com/photo/2013/07/12/18/35/social-network-153535_960_720.png",
                "name": "Zoom",
                "correct": true,
                "highlight": []
            },
            {
                "image": "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_960_720.png",
                "name": "Google Meet",
                "correct": false,
                "highlight": []
            },
            {
                "image": "https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png",
                "name": "Facebook Messenger Rooms",
                "correct": false,
                "highlight": []
            },
            {
                "image": "https://lh3.googleusercontent.com/krVeVUWndHhbfgSLzl3BxoiV6KTiDFGpucjlbNUsWXHJpKUo0wDqvVzj4OebrAhssQ",
                "name": "GoToMeeting",
                "correct": false,
                "highlight": []
            }
        ];
        this.items = items.sort(function () { return Math.random() - Math.random() });
        this.calculateCorrect();

        var answers = [];
        var clicked = [];
        this.items.forEach((item) =>{
            answers.push(false);
            clicked.push(false);
        })

        this.state = {
            answers: answers,
            clicked: clicked,
            correctCaption: false,
            allCorrect: false,
            redirectFlag: false
        }


    }

    calculateCorrect = () => {
        var correct = [];
        this.items.forEach((item, i) => {
            correct[i] = item.correct;
        });
        this.totalCorrect = correct;
    }

    clickItem = (i) => {
        if(!this.state.allCorrect){
            this.setState(prevState => {
                var answers = prevState.answers;
                answers[i] = this.totalCorrect[i];
                var clicked = prevState.clicked;
                clicked[i] = true;
                return {answers: answers, clicked: clicked};
            }, function(){
                var correctAnsNum = this.state.answers.filter(function(ans){return ans === true}).length;
                var expectedCorrectAnsNum = this.totalCorrect.filter(function(ans){return ans === true}).length;
                if(correctAnsNum === expectedCorrectAnsNum){
                    //this.props.addExtraNext();

                    this.setState({correctCaption: true});
                    this.setState({allCorrect: true});
                    setTimeout(function(){
                        this.setState({correctCaption: false});
                    }.bind(this), 1500)


                }
            });
        }

    }

    render() {

        var totalItems = 4;
        var colNum = 12 / totalItems;

        return (

            <div className="contentBox contentBoxActivity">
                <div className="game-container memory-counting">
                    <span className="avoid-wrap">

                        <h1 style={{color: "white"}}>Which video conferencing tool has the most users?</h1>

            <div className="revision-container-phonemes">
                <div className="row no-gutters">
                    <div className="col-12 text-center">

                    </div>
                </div>
                <div className="row no-gutters">
                    {this.items.map((item, i) => (
                        <div key={i} className="col-md-6">
                            <div className={this.state.clicked[i] ? (this.state.answers[i] ? "correct"  : "incorrect") : ""}>
                                <div  className={this.state.clicked[i] || this.state.allCorrect ? "img no-click" : "img clickable attention"}>
                                    <img
                                        draggable="false"
                                        src={item.image}
                                        alt={item.name}
                                        onClick={() => this.clickItem(i)}
                                    />
                                </div>
                                <div className="word-label">
                                    {item.name
                                        .split("")
                                        .map((letter, j) =>
                                            item.highlight.includes(j) ? (
                                                <u key={i+j}>{letter}</u>
                                            ) : (
                                                letter
                                            )
                                        )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={this.state.correctCaption ? "feedbackCaption correct animated bounceIn"  : "feedbackCaption correct animated bounceIn hidden"}/>
            </div>

                    </span>

                </div>
                <br/>

                <div className="row no-gutters act-end-nav justify-content-end">


                    <div className="col-12 col-sm-auto order-sm-3 ">
                        {this.state.allCorrect ?
                            <button className="act-next bg-success " aria-pressed="true"><span
                                className="direction-icon" onClick={()=>this.setState({redirectFlag: true})}/>
                            </button>:
                            <button disabled className="act-next bg-secondary " aria-pressed="true"><span
                                className="direction-icon"/>
                            </button>}
                    </div>

                    {this.state.redirectFlag ? <Redirect to="/info"/> : console.log("nothing")}


                </div>



            </div>
        );
    }
}



export default QandA;
