import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import './App.css';




class QandA2 extends Component {
    constructor(props){
        super(props);

        const listItems= [{"fact":"Online learning courses result i a 90% reduction in CO2 emissions "},
            {"fact":"The average full time student generates c.180 pounds of CO2"},{"fact":"The average online student generates c.4 pounds of CO2"}]

        this.items =  [{
            "image": "https://www.klik2learn.com/img/header-logo.png",
           "heading": "What does The Digital Learning Hub offer apart from game-based learning and frequent interactions?'",

        },
            {
                "image": "https://cdn.pixabay.com/photo/2015/05/12/09/13/freelancer-763730_960_720.jpg",
                "text": "1. Materials all ready to got before a course starts",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2020/04/25/19/59/call-5092454_960_720.jpg",
                "text": "2. No disruption through staff absence, pandemics, etc",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg",
                "text": "3. Learners don't passively consume content",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132_960_720.jpg",
                "text": "4. Learners choose the pace, time and place of their learning",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2017/06/27/11/48/team-spirit-2447163_960_720.jpg",
                "text": "5. Content is trialled, tested, quality assured externally and endorsed by awarding bodies",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_960_720.jpg",
                "text": "6. Clear start and finish, leading to certification",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2019/08/22/10/33/customer-4423142_960_720.jpg",
                "text": "7. Learners can be ready for assessment three times faster",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2015/07/02/10/40/writing-828911_960_720.jpg",
                "text": "1. Tutors can see what their students are doing and can offer evidence-based support.",
                "heading": "What is the tutors role?",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_960_720.jpg",
                "text": "2. Tutors can access real time feedback on their students from their own Reporting Dashboard.",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_960_720.jpg",
                "text": "3. Tutors can choose when and where to teach.",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2017/08/25/10/52/faces-2679740_960_720.jpg",
                "text": "4. Encourage collaborative learning through Forums",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2015/04/20/13/41/person-731479_960_720.jpg",
                "text": "5. Check the progress of our groups and individual students",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2020/05/12/13/04/video-conference-5162927_960_720.jpg",
                "text": "6. Collaborate with colleagues across the college and share best practice",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2017/12/26/20/46/girl-3041375_960_720.jpg",
                "text": "1. They take control of their learning and become more autonomous learners",
                "heading": "How do students benefit?",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2017/02/07/13/36/ipad-2045890_960_720.jpg",
                "text": "2. Everyone can plan their learning around their lives",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_960_720.jpg",
                "text": "3. They can choose their own learning style from a range of multimedia options",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
                "text": "4. There is a clear, structured pathway to progress",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272_960_720.jpg",
                "text": "5. They can acquire digital skills for the world of work",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2016/08/23/12/37/files-1614223_960_720.jpg",
                "text": "1. Less need for coursebooks and stationery.",
                "heading": "How do colleges benefit?",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2016/02/17/14/24/work-desk-1205159_960_720.jpg",
                "text": "2. Staff can work from home",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2016/03/05/22/34/abstract-1239321_960_720.jpg",
                "text": "3. Digital tutor hours are more flexible; no travelling time or classrooms.",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2017/12/12/09/09/business-3014200_960_720.jpg",
                "text": "4. Ongoing return on investment from product development.",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2014/11/13/23/34/london-530055_960_720.jpg",
                "text": "5. Collaborate with Klik2Learn to develop new online courses with UK and overseas learners.",

            },
            {
                "image": "https://cdn.pixabay.com/photo/2017/12/28/04/15/hand-3044387_960_720.jpg",
                "text": "6. Boost your reputation as a digital leader and innovator.",

            },
            {
                "image": "https://media.istockphoto.com/photos/carbon-dioxide-emissions-control-and-pollution-concept-picture-id1168182427",
                "text": "7. The Green agenda",
                "list": listItems.map((d)=><li key={d.fact}>{d.fact}</li>),
                "source": "Stockholm Environmental Institute",
               },
            {
                "image": "N/A",
                "text": "Final animation still to be added",

            },
        ];


        this.state = {
            counter: 0,
            redirectFlag: false,
        }
    }

    updateCounter=(direction)=>{
        if(direction === "back"){
            if(this.state.counter == 0){
                this.setState({redirectFlag: true});
            }
            else{
            this.setState(
                old =>{
                    let temp = old.counter;
                    temp = temp-1;
                    return{counter: temp}
                } );
        }}
        else if(direction === "forward"){
            this.setState(
                old =>{
                    let temp = old.counter;
                    temp = temp+1;
                    return{counter: temp}
                } );
        }
    };

    counterCheck=()=>{
        console.log(this.state.counter);
        if (this.state.counter === 26)
        {
            return( <button disabled className="act-next bg-secondary " aria-pressed="true"><span
                className="direction-icon"/>
            </button>)

        }
        else {
            return(<button className="act-next bg-success " aria-pressed="true"><span
                className="direction-icon" onClick={()=>this.updateCounter("forward")}/>
            </button>)
        }

    };


    render()
    {

        console.log(this.state.counter);


        return(
            <section >
                <div className="container-fluid" >
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <div className="act-panel">
                                {console.log(this.state.redirectFlag)}
                                {this.state.redirectFlag ? <Redirect to="/page"/> : console.log("nothing")}

                                <h2>{this.items[this.state.counter].heading}</h2>

                                <h4>{this.items[this.state.counter].text}</h4>
                                <div>
                                <img src={this.items[this.state.counter].image} class="round-corners mb-4"></img>
                                </div>

                                <ul>{this.items[this.state.counter].list}</ul>
                                <p>{this.items[this.state.counter].source}</p>

                                <br/>


                                <div className="row no-gutters act-end-nav justify-content-end">


                                    <div className="col-12 col-sm-auto order-sm-3 ">
                                            <button className="act-prev bg-success " aria-pressed="true"><span
                                                className="direction-icon" onClick={()=>this.updateCounter("back")}/>
                                            </button>
                                    </div>



                                    <div className="col-12 col-sm-auto order-sm-3 ">
                                        {this.counterCheck()}
                                    </div>




                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>

        );
    }
}




export default QandA2;
