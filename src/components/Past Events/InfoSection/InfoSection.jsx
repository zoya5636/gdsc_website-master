import React, { Component } from 'react'
import { Grid } from "@material-ui/core"
//import { googleFormsToJson } from 'react-google-forms-hooks'
import "./InfoSection.css"
import pastEvent1 from "../../../assets/past events/Resume_Roast.jpg"
import pastEvent2 from "../../../assets/past events/React_Intro.jpg"
import pastEvent3 from "../../../assets/past events/Halloween.jpg"
import pastEvent4 from "../../../assets/past events/TensorFlow.jpg"
import pastEvent5 from "../../../assets/past events/Career_Crawl.jpg"
import pastEvent6 from "../../../assets/past events/Fall_Mentorship_Program.jpg"
import pastEvent7 from "../../../assets/past events/Clubs_Fair.jpg"

const form_width = "840"
const form_height = "800"

export class InfoSection extends Component {
    render() {
        return (
            <div id="infoSectionContainer">
            <Grid container justify="center" spacing={5}>
                <Grid item md={12} spacing={3} style={{backgroundColor: 'white'}}>
                    <div className='infoSectionContent'>
                    <Grid container justify="center" spacing={5}>

                    <Grid item md={9} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={5} spacing={2}>
                                <h2>Resume Roast</h2>
                                <p>
                                    It’s internship season and everyone is looking to secure the best positions. A resume can make or break anyone’s job
                                    application, and strong first impressions are crucial for standing out among other applicants. In this workshop, we
                                    introduced the basics of resume creation and provide perspective on lesser-known tools and tactics for an easier
                                    process. This was an excellent opportunity to learn how to construct a stand-out resume and the dos and don’ts of
                                    mastering your application! Bonus: we selected a volunteer’s resume and “burn” it in a resume roast segment!
                                </p> 
                                </Grid>
                                <Grid item md={3} spacing={2}>
                                    <img src={pastEvent1} width="300" height="300" alt="stock" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item md={10} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={3} spacing={2}>
                                    <img src={pastEvent2} width="300" height="300" alt="stock" />
                                </Grid>
                                <Grid item md={4} spacing={2}>
                                    <h2>Introduction to React</h2>
                                    <p>
                                        React is a a JavaScript library commonly used for creating user interfaces. This workshop walked through some of the
                                        introductary principles regarding React.
                                    </p> 
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item md={9} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={5} spacing={2}>
                                <h2>Halloween Night</h2>
                                <p>
                                    On Halloween, we hosted Halloween-themed games night with food and activities, such as soda pong, musical chairs,
                                    mini pumpkin decorating, and more! This was also an opportunity to show off your favourite Halloween costume as
                                    we had a costume competition with a prize for the winner with the spookiest costume!
                                </p> 
                                </Grid>
                                <Grid item md={3} spacing={2}>
                                    <img src={pastEvent3} width="300" height="300" alt="stock" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item md={10} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={3} spacing={2}>
                                    <img src={pastEvent4} width="300" height="300" alt="stock" />
                                </Grid>
                                <Grid item md={4} spacing={2}>
                                    <h2>TensorFlow Workshop</h2>
                                    <p>
                                        This workshop went over the basics of building neural networks for software engineers,
                                        through neural weights and biases, activation functions, supervised learning, and gradient descent. We started
                                        with low-level Tensorflow and included a sample of high-level Tensorflow code using layers and data sets
                                    </p> 
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item md={9} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={5} spacing={2}>
                                <h2>Career Crawl</h2>
                                <p>
                                    The Career Crawl consisted of multiple info sessions and a networking event geared towards exposing students to a variety
                                    of industries, companies, and positions in tech. This event was a great opportunity for students to broaden their knowledge,
                                    gain connections, and ultimately advance their career opportinuties.
                                </p> 
                                </Grid>
                                <Grid item md={3} spacing={2}>
                                    <img src={pastEvent5} width="300" height="300" alt="stock" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item md={10} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={3} spacing={2}>
                                    <img src={pastEvent6} width="300" height="300" alt="stock" />
                                </Grid>
                                <Grid item md={4} spacing={2}>
                                    <h2>Fall Mentorship Program</h2>
                                    <p>
                                        Mentees were paired with a mentor in the program. The program ran from October to December. Mentors were a
                                        mix of upper-year students in a related field and industry professionals. Participants had the chance to hear from our
                                        mentors in this mentorship program introductory event.
                                    </p> 
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item md={9} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={5} spacing={2}>
                                <h2>Clubs Fair</h2>
                                <p>
                                    The Clubs Fair was a great opportunity to meet team representitives and learn more about the planned events for this semester.
                                </p> 
                                </Grid>
                                <Grid item md={3} spacing={2}>
                                    <img src={pastEvent7} width="300" height="300" alt="stock" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    </Grid>
                    </div>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default InfoSection

