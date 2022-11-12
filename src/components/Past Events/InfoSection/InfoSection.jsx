import React, { Component } from 'react'
import { Grid } from "@material-ui/core"
//import { googleFormsToJson } from 'react-google-forms-hooks'
import "./InfoSection.css"
import pastEvent1 from "../../../assets/past events/Resume_Roast.jpg"
import pastEvent2 from "../../../assets/past events/React_Intro.jpg"
import pastEvent3 from "../../../assets/past events/Resume_Roast.jpg"

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
                                mastering your application! Bonus: we selected a volunteer’s resume and “burn” it in a resume roast segment
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

                    </Grid>
                    </div>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default InfoSection

