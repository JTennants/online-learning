import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';

import MatchingPairs from "./matchingpairs";
import MatchingPairs2 from "./matchingpairs2";
import MatchingPairs3 from "./matchingpairs3";
import Start from "./start";
import QandA from "./qanda";
import QandA2 from "./qanda2";
import Quote from "./info";
import Quote2 from "./info2";
import Quote3 from "./info3";
import DragandDrop from "./draganddrop";
import Image from "./imagepage";
import Image2 from "./imagepage2";


class App extends Component {
    render()
    {
        return(

            <div className="App">

                <Switch>
                <Route path="/" exact component={Start} />
                <Route path={"/matchingpairs"} exact component={MatchingPairs} />
                <Route path={"/matchingpairs2"} exact component={MatchingPairs2} />
                <Route path={"/matchingpairs3"} exact component={MatchingPairs3} />
                <Route path={"/qanda"} exact component={QandA} />
                <Route path={"/fin"} exact component={QandA2} />
                <Route path={"/info"} exact component={Quote} />
                <Route path={"/info2"} exact component={Quote2} />
                <Route path={"/page"} exact component={Quote3} />
                <Route path={"/draganddrop"} exact component={DragandDrop} />
                <Route path={"/img"} exact component={Image} />
                <Route path={"/img2"} exact component={Image2} />


                </Switch>
            </div>

        );
    }
}



export default App;
