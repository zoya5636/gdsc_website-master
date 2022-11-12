import React from 'react';
import Footer from '../components/footer';
import Icon from '../components/icons';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href='/'>Home</Footer.Link>
                    <Footer.Link href='/events/2022'>Upcoming Events</Footer.Link>
                    <Footer.Link href='/past_events/2022'>Past Events</Footer.Link>
                    <Footer.Link href='/team/2022'>Team</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link target='_blank' href="https://discord.com/invite/2yY4KEaUrS">Discord</Footer.Link>
                    <Footer.Link target='_blank' href="https://www.facebook.com/utsgdsc/">Facebook</Footer.Link>
                    <Footer.Link target='_blank' href="https://www.instagram.com/gdscutsg/">Instagram</Footer.Link>
                    <Footer.Link target='_blank' href="https://twitter.com/dscutsg">Twitter</Footer.Link>
                    <Footer.Link target='_blank' href="https://linktr.ee/gdscutsg">Linktree</Footer.Link>
                </Footer.Column>
            </Footer.Row>
                <Footer.Column>
                    <Footer.Subheading>Built by the Google Developer Student Clubs Chapter at UTSG.</Footer.Subheading>
                </Footer.Column>
            </Footer.Wrapper>
        </Footer>
    )
}