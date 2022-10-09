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
                            <h2>Fall Mentorship Program</h2>
                            <p>
                                Mentees will be paired with a mentor in the program. The program will run from <b>October to December</b>. Mentors are a
                                <br></br>
                                mix of upper-year students in a related field and industry professionals. You will get the chance to hear from our
                                <br></br>
                                mentors in our upcoming mentorship program introductory event (stay tuned for more info coming soon!)
                                <br></br>
                                <br></br>
                                <p><b>Mentor Application Form:</b></p>
                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScbes24Pu8SgdHkgWoHh6CX0gcNJYR8ZtzIScmyVhQrRgsGDA/viewform?embedded=true" width={ form_width } height={ form_height } frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                <br></br>
                                <br></br>
                                <p><b>Mentee Application Form:</b></p>
                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvNsieNj8Yq2b32f9yOwHzpemfLrv2588_h8ulwLMa7oKRgw/viewform?embedded=true" width={ form_width } height={ form_height } frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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

