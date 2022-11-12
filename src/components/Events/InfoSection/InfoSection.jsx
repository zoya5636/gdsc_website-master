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
                            <h2>Weekly LeetCode</h2>
                            <p>
                            Get ready with our Weekly LeetCode Workshop! The event will be starting on <b>Saturday, November 12.</b>
                                <br></br>
                                On the day, we will release the first batch of LeetCode problems at <b>3:00pm</b>. Next, on the following <b>Friday,
                                <br></br>
                                November 18</b>, we will hold our first in-person discussion from <b>5:00pm to 6:30pm</b>, and then the following <b>Saturday,
                                <br></br>
                                November 19</b>, the second batch of problems. We will continue posting problems and holding discussions weekly until
                                <br></br>
                                we have covered all topics and main problems in Grind 75. It’s an opportunity that you don’t want to miss!
                            </p> 
                        </Grid>

                        <Grid>
                            <h2>Fall Mentorship Program</h2>
                            <p>
                                Mentees will be paired with a mentor in the program. The program runs from <b>October to December</b>.Mentors are a
                                <br></br>
                                mix of upper-year students in a related field and industry professionals. Participants have the chance to hear from our
                                <br></br>
                                mentors in this mentorship program introductory event!
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

