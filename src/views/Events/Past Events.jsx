import React, { Component } from 'react'
import { PastEventsHeading } from "../../components/Past Events/EventsHeading/EventsHeading"
import InfoSection from '../../components/Past Events/InfoSection/InfoSection'

export class PastEvents extends Component {
    render() {
        return (
            <div id='eventContainer'>
                <PastEventsHeading />
                <InfoSection />
            </div>
        )
    }
}

export default PastEvents
