import React, { Component } from 'react'
import { Grid, Container, Typography } from "@material-ui/core"

import blank from '../../../assets/team/blank.png'
import aryan from '../../../assets/team/Aryan Ghosh.jpeg'
import dhruvaa from '../../../assets/team/Dhruvaa.JPG'
import donghyun from '../../../assets/team/Donghyun Suh.jpg'
import ege from '../../../assets/team/Ege Mert Akin.jpeg'
import elizabeth from '../../../assets/team/Elizabeth Lee-Chin.jpeg'
import halyn from '../../../assets/team/Halyn Oh.jpeg'
import hongzip from '../../../assets/team/Hongzip Kim.jpg'
import hrid from '../../../assets/team/Hrid Patel.jpeg'
import inaas from '../../../assets/team/Inaas.jpg'
import isabelle from '../../../assets/team/Isabelle Tam.jpg'
import isha from '../../../assets/team/Isha Juneja.jpg'
import jasmine from '../../../assets/team/Jasmine Yang.jpg'
import jessie from '../../../assets/team/Jessie Lam.jpeg'
import jolina from '../../../assets/team/Jolina Li.png'
import khushil from '../../../assets/team/Khushil Nagda.jpg'
import min from '../../../assets/team/Min Gi.jpeg'
import nayanika from '../../../assets/team/Nayanika Mathur.JPG'
import sergio from '../../../assets/team/Sergio Perez.jpeg'
import william from '../../../assets/team/William.jpeg'
import xiao from '../../../assets/team/XIao.jpeg'
import yixing from '../../../assets/team/Yixing Xu.jpg'
import yuming from '../../../assets/team/Yuming.png'
import zoya from '../../../assets/team/zoya.jpg'
import narges from '../../../assets/team/Narges_Movahedian_Nezhad.jpg'
import ellie from '../../../assets/team/Ellie.JPG'
import ariana from '../../../assets/team/Ariana_Jung.jpg'
import faatima from '../../../assets/team/Faatima Abidi.jpg'

import './Profile.css'

// link will break eventually, picked up from linkedin
// const placeholderImage = 'https://media-exp1.licdn.com/dms/image/C4E03AQEfLYXGn9QJWg/profile-displayphoto-shrink_800_800/0/1618599413564?e=1637193600&v=beta&t=M9JHP-T1ny_WRmBMDX_WIuPQAjCooahcrJezWTNpeBI'

const members = [
    {
        name: 'Jolina Li',
        photo: jolina,
        position: 'GDSC Lead',
    },
    {
        name: 'Yuming Huang',
        photo: yuming,
        position: 'GDSC Vice-Lead',
    },
    {
        name: 'Yixing Xu',
        photo: yixing,
        position: 'Logistics Director',
    },
    {
        name: 'William Guo',
        photo: william,
        position: 'Logistics Director',
    },
    {
        name: 'Jessie Lam',
        photo: jessie,
        position: 'Event Director',
    },
    {
        name: 'Isabelle Tam',
        photo: isabelle,
        position: 'Event Director',
    },
    {
        name: 'Halyn Oh (Ashley)',
        photo: halyn,
        position: 'Operations Associate',
    },
    {
        name: 'Khushil Nagda',
        photo: khushil,
        position: 'Operations Associate',
    },
    {
        name: 'Narges Movahedian Nezhad',
        photo: narges,
        position: 'Workshop Director',
    },
    {
        name: 'Donghyun Danny Suh',
        photo: donghyun,
        position: 'Workshop Director',
    },
    {
        name: 'Xiao Zhang',
        photo: xiao,
        position: 'Experience Director',
    },
    {
        name: 'Sergio Andres Perez Torres',
        photo: sergio,
        position: 'Experience Director',
    },
    {
        name: 'Elizabeth Lee-Chin',
        photo: elizabeth,
        position: 'Industry Editor',
    },
    {
        name: 'Isha Juneja',
        photo: isha,
        position: 'Outreach Associate',
    },
    {
        name: 'Hongzip Kim',
        photo: hongzip,
        position: 'Outreach Associate',
    },
    {
        name: 'Dhruvaa Saravanan',
        photo: dhruvaa,
        position: 'Mentorship Program Director',
    },
    {
        name: 'Nayanika Mathur',
        photo: nayanika,
        position: 'Mentorship Program Director',
    },
    {
        name: 'Ellie Kang',
        photo: ellie,
        position: 'Project Director',
    },
    {
        name: 'Ege Mert Akin',
        photo: ege,
        position: 'Project Director',
    },
    {
        name: 'Aurora Zhang',
        photo: blank,
        position: 'Mentorship Associate',
    },
    {
        name: 'Min Gi Kwon',
        photo: min,
        position: 'Mentorship Associate',
    },
    {
        name: 'Aryan Ghosh',
        photo: aryan,
        position: 'Marketing Director',
    },
    {
        name: 'Jasmine Yang',
        photo: jasmine,
        position: 'Marketing Director',
    },
    {
        name: 'Ariana Jung',
        photo: ariana,
        position: 'Graphic Designer',
    },
    {
        name: 'Hrid Patel',
        photo: hrid,
        position: 'Graphic Designer',
    },
    {
        name: 'Inaas Asad',
        photo: inaas,
        position: 'Marketing Associate',
    },
    {
        name: 'Faatima Zehera Abidi',
        photo: faatima,
        position: 'Marketing Associate',
    },
    {
        name: 'Zoya Chishtie',
        photo: zoya,
        position: 'Web Developer',
    }
]

export class Profile extends Component {
    render() {
        return (
            <div className="memberContainer">
                <Grid container justify="center" spacing={3}>
                    {members.map((member, i) => {
                        return (
                            <Grid item lg={3} md={4}>
                                <div className='member'>
                                    <a href="/">
                                        <img className='memberPhoto' src={`${member.photo}`} alt='user' />
                                        <div className='memberInfo'>
                                            <h3 className='memberName'>{member.name}</h3>
                                            <small className='memberPosition'>{member.position}</small>
                                            {/* <p className='memberDesc'>{member.desc}</p> */}
                                        </div>
                                    </a>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            <br></br>
            <br></br>
            </div>)
    }
}

export default Profile
