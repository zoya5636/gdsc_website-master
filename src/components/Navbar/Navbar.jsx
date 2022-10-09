import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Navbar.css'
import logo from '../../assets/dsclogowhite2.png'
import discordLogo from '../../assets/discordLogo.svg'
import instagramLogo from '../../assets/instagramLogo.svg'


export class Navbar extends Component {
    render() {
        return (
            <div className='navbarBlack'>
                {/* <a href="/"><img className='logo' src={logo} alt='logo'></img></a> */}
                {/* {
                    isLoggedIn ? <button className="active loginPageButton" onClick={() => this.logoutUserHandler()}>Logout</button> :
                    <a className="active loginPageButton navfloatright" href="/login" >Login</a>
                } */}
                
                <a href='/' className='navLogo'><img src={logo} /></a>
                <a className='logofloatright' target="_blank" href="https://discord.gg/RVWbuKGB">
                    <img src={discordLogo} class='socialLogo' alt="discord logo"/>
                </a>
                <a className='logofloatright' target="_blank" href="https://www.instagram.com/gdscutsg">
                    <img src={instagramLogo} class='socialLogo' alt="discord logo"/>
                </a>
                <a className='navfloatright' href='/team/2020'>Team</a>
                <a className='navfloatright' target="_blank" href='https://www.instagram.com/gdscutsg'>Blog</a>
                <a className='navfloatright' href='/events/2022'>Events</a>
                <a className='navfloatright' href="/">Home</a>
                {/* <div style={{float: 'right'}}>    */}
                    {/* <Menu right>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                    </Menu> */}
                {/* </div>  */}
            </div>
        )
    }
}

export default Navbar
