import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';
import Draggable from './Draggable';
import Droppable from './Droppable';



class DragandDrop extends Component {
    constructor(props) {
        super(props);
        this.droppablesExpected = [
            ["I", "N", "T", "E", "R", "A", "C", "T", "I", "O", "N"]
        ];
        this.labelsForDraggables = ["N", "I", "C", "E", "T", "O", "T", "R", "A", "I", "N"];
        this.labelsForDraggables = this.labelsForDraggables.sort(function () { return Math.random() - Math.random() });
        this.spanData = [
            ["Online learning is a learner's "]
        ];
       // this.props.hidePrev();
        this.state = {
            counter: 0,
            correctCaption: false,
            incorrectCaption: false,
            redirectFlag: false
        };

        this.droppables = this.droppablesExpected.map(
            (value, index) => {
                return value;
            }
        );




            this.splitIndex = 1;
            this.lengthOfDroppable = 11;



    }

    getArrayLength = () => {
        let count = 0;
        this.droppablesExpected.map((arr, i) => {
            arr.map((elem, j) => {
                count++;
            })
        });

        return count;
    }

    triggerDrop = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
            correctCaption: true
        }));
        setTimeout(
            function () {
                this.setState({ correctCaption: false });
            }.bind(this),
            1500
        );
        if ((this.state.counter >= this.getArrayLength()) || (this.state.counter >= this.lengthOfDroppable)) {
            //this.props.completeAction();
            this.setState({redirectFlag: true});
        }
    };

    renderLongWords = (spanFlag) => {
        let spanInfo = [];
        let spanInfo2 = [];
        let longWordArr = [];
        let longWordArr2 = [];
        let toReturn = [];
        let i = 0;
        for (i; i < this.splitIndex[0]; i++) {
            if (spanFlag) {
                spanInfo.push(<div key={i} className="dragNeighbour">{this.spanData[0][i]}</div>)

            }
            longWordArr.push(
                <div key={i} className="droppableBox">
                    <Droppable
                        key={this.droppablesExpected[0][i]}
                        targetKey={this.droppablesExpected[0][i]}
                        name={this.droppablesExpected[0][i]}
                        triggerDrop={this.triggerDrop}
                    />
                </div>
            );
        };
        if (spanFlag) {
            toReturn.push(<div className="nowrap inline-block">{spanInfo}</div>)
        };
        toReturn.push(<div className="nowrap inline-block">{longWordArr}</div>);

        if (this.splitIndex.length > 1) //if theres 2 line splits
        {
            let spanInfo3 = [];
            let longWordArr3 = [];
            for (i; i < this.splitIndex[1]; i++) {
                if (spanFlag) {
                    spanInfo3.push(<div key={i} className="dragNeighbour">{this.spanData[0][i]}</div>)

                }
                longWordArr3.push(
                    <div key={i} className="droppableBox">
                        <Droppable
                            key={this.droppablesExpected[0][i]}
                            targetKey={this.droppablesExpected[0][i]}
                            name={this.droppablesExpected[0][i]}
                            triggerDrop={this.triggerDrop}
                        />
                    </div>
                );
            };
            if (spanFlag) {
                toReturn.push(<div className="nowrap inline-block">{spanInfo3}</div>)
            };
            toReturn.push(<div className="nowrap inline-block">{longWordArr3}</div>);
        }

        for (i; i < this.lengthOfDroppable; i++) {
            if (spanFlag) {
                spanInfo2.push(<div key={i} className="dragNeighbour">{this.spanData[0][i]}</div>)

            }
            longWordArr2.push(
                <div key={i} className="droppableBox">
                    <Droppable
                        key={this.droppablesExpected[0][i]}
                        targetKey={this.droppablesExpected[0][i]}
                        name={this.droppablesExpected[0][i]}
                        triggerDrop={this.triggerDrop}
                    />
                </div>
            );
        };
        if (spanFlag) {
            toReturn.push(<div className="nowrap inline-block">{spanInfo2}</div>)
        };
        toReturn.push(<div className="nowrap inline-block">{longWordArr2}</div>);

        return (toReturn);
    }

    render() {

        var showAudio = null;
        var showDualAudio = null;



        var draggables = this.labelsForDraggables.map(
            (label, index) => {
                return (
                    <div key={index} className="dragContainerWrapper">
                        <div className="ddcontainer">
              <span className="ddcontainersource">
                <Draggable key={label} targetKey={label} label={label} />
              </span>
                        </div>
                    </div>
                );
            }
        );


        return (
            <React.Fragment>
                {this.state.correctCaption ? (
                    <div className="feedbackCaption correct animated bounceIn" />
                ) : (
                    <React.Fragment />
                )
                }
                <div className="contentBox contentBoxActivity">
                    <div className="dd-form-words size-lg">
                        {showAudio ? (
                            showDualAudio ? (
                                <div className="row no-gutters">
                                    <div className="col-12">
                    <span className="audioAccentsContainer mb-5">
                      {this.props.pageData.viewData[0].audiobuttons.map(
                          (item, i) => (
                          {/*    <DualAudioButton
                                  key={i}
                                  buttonStyle={
                                      "button-audio accent button-lg flag" +
                                      item.location
                                  }
                                  audioSrc={item.audio}
                              />*/}
                          )
                      )}
                    </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="row no-gutters">
                                    <div className="col-12">
                                        {this.props.pageData.viewData[0].audiobuttons.map(
                                            (item, i) => (
                                           {/*     <AudioButton
                                                    key={i}
                                                    styling={item.audio === "" ? ("button-audio button-lg no-sound" + (this.spanData ? "" : (" mb-5"))) : ("button-audio button-lg" + (this.spanData ? "" : (" mb-5")))}
                                                    audioSrc={item.audio}
                                                />*/}
                                            )
                                        )}
                                    </div>
                                </div>
                            )
                        ) : (
                            <React.Fragment />
                        )}

                        <div className="row no-gutters">
                            <div className="col-12">
                                {
                                    !this.spanData ? (
                                        this.splitIndex && (this.lengthOfDroppable > this.splitIndex[0]) ? (
                                            <div className="dd-word-group">
                                                {
                                                    this.renderLongWords()
                                                }
                                            </div>
                                        ) : (
                                            this.droppables.map((word, i) => {
                                                return (
                                                    <div className="dd-word-group" key={i + "group"}>
                                                        <div className="nowrap inline-block">
                                                            {
                                                                word.map((it, j) => (
                                                                    <div key={j} className="droppableBox">
                                                                        <Droppable
                                                                            key={it}
                                                                            targetKey={it}
                                                                            name={it}
                                                                            triggerDrop={this.triggerDrop}
                                                                        />
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        )
                                    ) : (
                                        this.splitIndex && (this.lengthOfDroppable > this.splitIndex[0]) ? (
                                            <div className="dd-word-group">
                                                {
                                                    this.renderLongWords(true)
                                                }
                                            </div>
                                        ) : (
                                            this.spanData.map(function (word, i) {
                                                var currDropWord = this.droppables[i];
                                                console.log(currDropWord);
                                                return (
                                                    <div className="dd-word-group" key={i + "group"}>
                                                        <div className="nowrap">
                                                            {
                                                                word.map((letter, j) => (
                                                                    <div className="dragNeighbour" key={i + j + "letter"}>
                                                                        {letter}
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                        <div className="nowrap inline-block">
                                                            {
                                                                currDropWord.map((it, j) => (
                                                                    <div key={j} className="droppableBox">
                                                                        <Droppable
                                                                            key={it}
                                                                            targetKey={it}
                                                                            name={it}
                                                                            triggerDrop={this.triggerDrop}
                                                                        />
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>)
                                            }.bind(this))
                                        )
                                    )
                                }
                            </div>
                        </div>
                        <p>with content and/or tutors</p>
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="drag-source-box">{draggables}</div>
                            </div>
                        </div>
                    </div>
                    {this.state.redirectFlag ? <Redirect to='/img'/> : console.log("nothing")}
                </div>
            </React.Fragment>

        );
    }
}





export default DragandDrop;
