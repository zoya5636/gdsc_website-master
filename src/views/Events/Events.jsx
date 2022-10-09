import React, { Component } from 'react'
import { EventsHeading } from "../../components/Events/EventsHeading/EventsHeading"
import InfoSection from '../../components/Events/InfoSection/InfoSection'

export class Events extends Component {
    render() {
        return (
            <div id='eventContainer'>
                <EventsHeading />
                <InfoSection />
            </div>
        )
    }
}

export default Events
