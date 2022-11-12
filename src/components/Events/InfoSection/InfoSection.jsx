import React, { Component } from 'react'
import { Grid } from "@material-ui/core"
//import { googleFormsToJson } from 'react-google-forms-hooks'
import "./InfoSection.css"
import stock2 from "../../../assets/events/Fall_Mentorship_Program.jpg"
import stock3 from "../../../assets/events/Weekly_Leetcode.jpg"

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
                                <h2>Weekly LeetCode</h2>
                            <p>
                                Get ready with our Weekly LeetCode Workshop! The event will be starting on <b>Saturday, November 12.</b> On the day, we
                                will release the first batch of LeetCode problems at <b>3:00pm</b>. Next, on the following <b>Friday,
                                November 18</b>, we will hold our first in-person discussion from <b>5:00pm to 6:30pm</b>, and then the following <b>Saturday,
                                November 19</b>, the second batch of problems. We will continue posting problems and holding discussions weekly until
                                we have covered all topics and main problems in Grind 75. It’s an opportunity that you don’t want to miss!
                            </p> 
                                </Grid>
                                <Grid item md={3} spacing={2}>
                                <img src={stock3} width="300" height="300" alt="stock" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item md={10} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={3} spacing={2}>
                                    <img src={stock2} width="300" height="300" alt="stock" />
                                </Grid>
                                <Grid item md={4} spacing={2}>
                                    <h2>Fall Mentorship Program</h2>
                                    <p>
                                        Mentees will be paired with a mentor in the program. The program runs from <b>October to December</b>. Mentors are a
                                        mix of upper-year students in a related field and industry professionals. Participants have the chance to hear from our
                                        mentors in this mentorship program introductory event!
                                    </p> 
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

