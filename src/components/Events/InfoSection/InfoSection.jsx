import React, { Component } from 'react'
import { Grid } from "@material-ui/core"
//import { googleFormsToJson } from 'react-google-forms-hooks'
import "./InfoSection.css"
import event1 from "../../../assets/events/Weekly_Leetcode.jpg"
import event2 from "../../../assets/events/Winter_Mentorship.jpg"
import event3 from "../../../assets/events/Ask_Anything.jpg"

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
                                <h2>Weekly LeetCode Jams</h2>
                                <p>
                                    Get ready with our Weekly LeetCode Workshop! Each Saturday, we
                                    will release a batch of LeetCode problems at <b>3:00pm</b>. Next, on the following <b>Friday</b>, we will hold
                                    an in-person discussion from <b>6:00pm to 7:00pm</b>. We will continue posting problems and holding discussions weekly
                                    until we have covered all topics and main problems in Grind 75. It’s an opportunity that you don’t want to miss!
                                </p> 
                            </Grid>
                            <Grid item md={3} spacing={2}>
                                <img src={event1} width="300" height="300" alt="stock" />
                            </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item md={10} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={3} spacing={2}>
                                    <img src={event2} width="300" height="300" alt="stock" />
                                </Grid>
                                <Grid item md={4} spacing={2}>
                                    <h2>Winter Mentorship Program</h2>
                                    <p>
                                        Mentees will be paired with a mentor in the program. Mentors are a
                                        mix of upper-year students in a related field and industry professionals. Participants have the chance to hear from our
                                        mentors in this mentorship program introductory event!
                                        <br></br>
                                        <br></br>
                                        Be sure to check out the available forms to apply for the role of mentor or mentee!
                                    </p> 
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item md={9} spacing={3} style={{backgroundColor: 'white'}}>
                        <div className='infoSectionContent'>
                            <Grid container justify="center" spacing={5}>
                                <Grid item md={5} spacing={2}>
                                <h2>Ask Me Anything</h2>
                                <p>
                                On <b>February 9</b>, GDSC is thrilled to have Jeff Nguyen, a Technical Recruiter for Google and Founder of Boba Talks.
                                Boba Talks is an NPO that helps students navigate the ambiguities of early career and life development through mentorship with folks in the roles and industries that students aspire to be in. This way, students can ask the questions that actually matter to them.
                                Ask him anything, whether personal, mental health, career, or anything to do with Boba!
                                If you are interested, <a href='https://gdsc.community.dev/events/details/developer-student-clubs-university-of-toronto-st-george-campus-presents-ask-me-anything-with-jeff-nguyen-a-technical-recruiter-for-google-and-founder-of-boba-talks/' target="blank"><b>click here</b></a> to
                                sign up!
                                </p> 
                                </Grid>
                                <Grid item md={3} spacing={2}>
                                    <img src={event3} width="300" height="300" alt="stock" />
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

