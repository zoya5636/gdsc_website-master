import React, { Component } from 'react'
import { Grid } from "@material-ui/core"
//import { googleFormsToJson } from 'react-google-forms-hooks'
import "./InfoSection.css"

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
                        <Grid>
                            <h2>Resume Roast</h2>
                            <p>
                                It’s internship season and everyone is looking to secure the best positions. A resume can make or break anyone’s job
                                <br></br>
                                application, and strong first impressions are crucial for standing out among other applicants. In this workshop, we
                                <br></br>
                                introduced the basics of resume creation and provide perspective on lesser-known tools and tactics for an easier
                                <br></br>
                                process. This was an excellent opportunity to learn how to construct a stand-out resume and the dos and don’ts of
                                <br></br>
                                mastering your application! Bonus: we selected a volunteer’s resume and “burn” it in a resume roast segment
                            </p> 
                        </Grid>

                        <Grid>
                            <h2>Introduction to React</h2>
                            <p>
                                React is a a JavaScript library commonly used for creating user interfaces. This workshop walked through some of the
                                <br></br>
                                introductary principles regarding React.
                            </p> 
                        </Grid>

                        <Grid>
                            <h2>Halloween Night</h2>
                            <p>
                                On Halloween, we hosted Halloween-themed games night with food and activities, such as soda pong, musical chairs,
                                <br></br>
                                mini pumpkin decorating, and more! This was also an opportunity to show off your favourite Halloween costume as
                                <br></br>
                                we had a costume competition with a prize for the winner with the spookiest costume!
                            </p> 
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

