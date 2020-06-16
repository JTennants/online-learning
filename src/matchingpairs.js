import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies, useCookies } from 'react-cookie';
import './App.css';


class MatchingPairs extends Component {
    constructor(props) {
        super(props);
        var matchPhrases = [
            {"label":"Flipped Classroom", "val":"1"}, {"label":"Self-study content online. Discuss later with tutor", "val":"1"},
            {"label":"Distance Learning", "val":"2"}, {"label":"Learn online without any tutor support ", "val":"2"},
            {"label":"Blended Learning", "val":"3"}, {"label":"Combine online learning with classroom learning", "val":"3"},
            {"label":"Learning Platform", "val":"4"}, {"label":"A set of tools to manage online learners and learning", "val":"4"}
        ];
        var matchesReq = 4;
        var justLabels = [];

        this.items = matchPhrases.sort(function () { return Math.random() - Math.random() });
        for(var i=0; i<this.items.length; i++){
            justLabels.push(this.items[i].label);
        }

        this.state = {
            currSelection: '',
            matches: [],
            currVal: '',
            counter: matchPhrases.length / 2,
            matchesCounter: 0,
            flipped: this.items.map(() => { return false }),
            disabled: false,
            correctCaption: false,
            matchesNeeded: matchesReq,
            jl: justLabels,
			redirectFlag: false
        };

       // this.props.hidePrev();


    }



    empty=()=>{

    }

    handleClick = (evt) => {

        var text = evt.currentTarget.children[1].innerHTML;
        var val = evt.target.getAttribute("value");
        var textTrimmed = text.toLowerCase().trim();
        var currSelectionTrimmed = this.state.currSelection.toLowerCase().trim();
        var currSelectionVal = this.state.currVal;

        if(text.indexOf("<") !== -1){
            //find the word begin and start the cutting immediately after it's end
            var start = text.indexOf("begin") + 6;
            //find the word end and end the cutting immediately before it's beginning
            var end = text.indexOf("finish")-1;
            //do the cutting
            text = text.substring(start, end);
        }

        if(this.state.matches.includes(textTrimmed) || this.state.matches.includes(currSelectionTrimmed)
            || this.state.disabled || textTrimmed === currSelectionTrimmed){
            return;
        }

        if (val === currSelectionVal) {
            this.setState(state => {
                const matches = state.matches;
                //inclement the number of matches found
                const counter = state.counter - 1;
                const matchesNeeded = state.matchesNeeded;
                const matchesCounter = state.matchesCounter + 1;

                //add both cards' text to the matches array, or they will still be considered "unmatched" and can be
                //clicked for further matches
                matches.push(text); matches.push(currSelectionTrimmed);

                //make the cards stay flipped till the end of tha game
                state.flipped[state.jl.indexOf(text)] = true;
                state.flipped[state.jl.indexOf(currSelectionTrimmed)] = true;

                //if the number of needed matches is reached, call completeAction to allow user to progress
                if (counter <= 0 || matchesCounter === matchesNeeded) {
                    //this.props.completeAction();
                    this.setState({
                        correctCaption: true,
                    })
                    setTimeout(function() {
                        this.setState({correctCaption: false, redirectFlag: true})
                    }.bind(this), 2000);
                }

                //return the updated arrays and clean the selectors for most recent and second most recent
                return { matches, currSelection: "", currVal: "", counter, flipped: state.flipped, matchesCounter };
            });


        }
        //if the second most recent card value is empty, set it's value to the most recent card
        else if (this.state.currSelection === "" && this.state.currVal === "" && this.state.matches.includes(text) === false) {
            this.setState(state => {
                state.flipped[state.jl.indexOf(text)] = true;
                return { currSelection: text, currVal: val, flipped: state.flipped };
            });
        }
        //if a match is not found, reset the values for most recent and second most recent
        else {
            var oldSelection = this.state.currSelection;
            var oldVal = this.state.currVal;
            this.setState(state => {
                state.flipped[state.jl.indexOf(text)] = true;
                return { currSelection: "", currVal: "", flipped: state.flipped, disabled: true };
            });

            //unflip both cards after 1 sec
            setTimeout(function () {
                this.setState(state => {
                    state.flipped[state.jl.indexOf(text)] = false;
                    state.flipped[state.jl.indexOf(oldSelection)] = false;
                    return { currSelection: "", currVal: "", flipped: state.flipped, disabled: false };
                });
            }.bind(this), 1000);
        }

    };

    render() {


        return (
            <div className="contentBox contentBoxActivity">
                <div className="game-container memory-counting">
                    <span className="avoid-wrap">
                        { //if all matches are found, show the green bubble
                            this.state.correctCaption ? <div className="feedbackCaption correct animated bounceIn"></div> : <React.Fragment/>}
                        {//for each letter create a card and pass on if it should be flipped or not
                            this.items.map((item) => <MatchElem key={item.label} flipped={(this.state.flipped[this.state.jl.indexOf(item.label)])}
                                                                onClick={(this.state.flipped[this.state.jl.indexOf(item.label)]) ? this.empty : this.handleClick} text={item.label} value={item.val}/>)}

                    </span>
                </div>

                {this.state.redirectFlag ? <Redirect to="/matchingpairs2"/> : console.log("nothing")}
            </div>

        );
    }
}

//renders the actual card ad applies the animation of flipping
function MatchElem(props) {
    return (
        <div className="card-wrapper" key={props.text}>
            <div
                className={props.flipped ? "flip-card applyFlip" : "flip-card"}
            >
                <div className="contents" onClick={props.onClick}>
                    <div
                        className="cardFront memory-card1 memory-open"
                        value={props.value}
                    />
                    <div className="cardBack" value={props.value}>
                        <p className={Number.parseInt(props.text, 10) ? ("digits") : ("")}>
                            <span text={"begin " + props.text + " finish"} />
                            {props.text}
                        </p>
                    </div>
                </div>

            </div>
        </div>


    );
}



export default MatchingPairs;
