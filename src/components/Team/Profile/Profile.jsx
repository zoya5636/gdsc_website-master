import React, { Component } from 'react'
import { Grid, Container, Typography } from "@material-ui/core"
import Member from './Member'

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
        description: 'I’m Jolina and I’m the GDSC Lead this year! I’m in my 3rd year at UofT studying computational cognition, computer science, and statistics. I love AI, machine learning, XR, and technology in general! It’s incredible how technology has transformed our lives and how the industry is growing at a rapid pace with people around the world creating and innovating every day. My passion is building technology for impact and I’m excited to be leading and growing a community with the same vision.',
    },
    {
        name: 'Yuming Huang',
        photo: yuming,
        position: 'GDSC Vice-Lead',
        description: 'Hi! My name is Yuming Huang (she/her) and I am so excited to be part of the GDSC as the Vice-Lead this year. I am a second-year student specializing in Mathematical Applications in Economics and Finance with a major in Statistics. GDSC offers people of all different experiences a chance to broaden their skills in technology and learn about the different opportunities available within the industry. These inclusive learning opportunities align with my values and I am really excited to be part of the planning for the projects this year. Looking forward to meeting everyone!',
    },
    {
        name: 'Yixing Xu',
        photo: yixing,
        position: 'Logistics Director',
        description: 'Hi everyone! I am Yixing, a third year in Mathematics, and I am so excited to be a Logistics Director at GDSC! I look forward to helping plan and coordinate in-person events and increase our club engagement, participation at events, and overall numbers so that we can reach more people to help, teach, and learn from. I am especially enthusiastic about being part of this community that shares the same love for technology, because I love exploring and creating technology that has anything to do with apps, games, or any other kind of interactive media that touches the hearts of its users. Can’t wait to meet you all!',
    },
    {
        name: 'William Guo',
        photo: william,
        position: 'Logistics Director',
        description: 'I (he/him) am a 4th-year student pursuing a double major in Statistics and Economics. As a Logistics Director, I’m responsible for organizing logistics for various events. I’m is excited to be joining GDSC UofT this year and to help grow and empower students in the field of technology. I strives to have all events and initiatives run successfully and positively impact students. I’m super interested in learning more about augmented reality and the endless possibilities in the future.',
    },
    {
        name: 'Jessie Lam',
        photo: jessie,
        position: 'Event Director',
        description: 'Hi! I’m Jessie Lam. I’m a fourth year student in computer science and bioinformatics. I’m GDSC’s event director, and I’m super excited to further understand the tech world and develop professionally alongside this community. My goal is to host a variety of events that are fun and practical for students from all academic backgrounds. I hope to host events that help students develop their technical skills, network, and strengthen their passion in tech.',
    },
    {
        name: 'Isabelle Tam',
        photo: isabelle,
        position: 'Event Director',
        description: 'Hey, my name is Isabelle, and I’m a third year Rotman Commerce student. I’ll be an Event Director for GDSC and I’m looking forward to running engaging and comprehensive tech events that promote critical thinking and problem solving. I hope to make tech and it’s technical side more approachable, and personally, I hope to gain insight from my peers and to develop my technical skills. Stay tuned and make sure to follow our Instagram. I’m looking forward to meeting everyone!',
    },
    {
        name: 'Halyn Oh (Ashley)',
        photo: halyn,
        position: 'Operations Associate',
        description: 'Hello!! My name is Ashley and I’m a second year student majoring in computer science. I’ve been accepted to the operations associate position in GDSC. I’m so excited to meet other associates in GDSC. My goal as an exec team member is to raise the attendance rate of GDSC events. As a student who is aiming to become a software engineer, I am interested in technologies in general but the technology that I have most passion for is computer graphics!!',
    },
    {
        name: 'Khushil Nagda',
        photo: khushil,
        position: 'Operations Associate',
        description: 'Hello! I’m Khushil and I am a 2nd year UofT student from Kenya studying Computer Science, Economics and Statistics. I love how technology empowers us with the means to improve the world around us. My passions lie in machine learning, music and building technological systems that solve problems and improve people’s welfare!',
    },
    {
        name: 'Narges Movahedian Nezhad',
        photo: narges,
        position: 'Workshop Director',
        description: 'Howdy! I’m Narges, a First-Year student planning to specialize in Computer Science with a Statistics Minor. I’m super excited to join the GDSC team because I believe in creating a supportive community of like-minded, motivated individuals. Looking forward to all of the exciting workshops and activities at GDSC this year. Thanks for reading my little intro; you’ve been awesome, I’ve been Narges, and I’ll see you around! P.S. Don’t be shy, give me a follow @narges.codes.',
    },
    {
        name: 'Donghyun Danny Suh',
        photo: donghyun,
        position: 'Workshop Director',
        description: 'Hello! My name is Danny and I am studying mathematics specialist and computer science minor at UofT. I am very excited to join GDSC as a Workshop Director this year. I am very passionate with web development and I hope to meet with all of you at our monthly workshops to learn about new technologies as well as meet other people who are interested in the field!',
    },
    {
        name: 'Xiao Zhang',
        photo: xiao,
        position: 'Experience Director',
        description: 'Hi, I am Xiao from EngSci 2T5! I am the experience director for GDSC this year :) I have most of my software experience in frontend and my favourite number is 2^127-1.',
    },
    {
        name: 'Sergio Andres Perez Torres',
        photo: sergio,
        position: 'Experience Director',
        description: 'My name is Sergio Perez. I am a second year international student studying computer science, statistics, and cognitive science, and I am an experience director at the Google Developers Student Club. I am thankful for this opportunity, and very excited to work with this great team. I am looking forward to bring lots of new and fun events and workshops for all of the club members to enjoy! Google has always been at the bleeding edge of technology, whether it is android, tensorflow, or the search engine we all use every day, among others. It is a privilege to be able to learn more and share the knowledge about these tools and systems.',
    },
    {
        name: 'Elizabeth Lee-Chin',
        photo: elizabeth,
        position: 'Industry Editor',
        description: 'I’m Elizabeth, a third-year student studying mathematics and statistics at the University of Toronto. As Industry Editor at GDSC, I’m super excited to learn more about new technologies and share my findings with the community. I’m looking forward to exposing the community to new technologies and developments, potential career paths, and discussing other disciplines in which these technologies can be applied!',
    },
    {
        name: 'Isha Juneja',
        photo: isha,
        position: 'Outreach Associate',
        description: 'Hi, I am Isha (she/her), a second-year student pursuing Computer Science. As an outreach associate, I hope to make your experiences at technical workshops, coding challenges, and other student events memorable, beneficial, and enjoyable. I am excited to join GDSC and connect with peers that are passionate about technology.',
    },
    {
        name: 'Hongzip Kim',
        photo: hongzip,
        position: 'Outreach Associate',
        description: 'My name is Hongzip Kim, and I’ll be the Outreach Associate at GDSC! I’m entering my second year at U of T, pursuing a Computer Science Specialist and Statistics Major. I am excited to join a network of like-minded students passionate about developer technology and discover how it can solve solutions to benefit and improve others around our community! My interests in technology include AI, ML, and Data Science.',
    },
    {
        name: 'Dhruvaa Saravanan',
        photo: dhruvaa,
        position: 'Mentorship Program Director',
        description: 'Hi everyone, I’m Dhruvaa and I’m a third year Computer Science student excited to join GDSC as the Mentorship Program Director! I’m interested in AI and the High Frequency Trading space primarily, and have spent most of my time in backend development. I hope to create a mentorship program at GDSC that helps out others as much as other mentorship programs have helped me in my time! Feel free to reach out to me, I’m always happy to chat!',
    },
    {
        name: 'Nayanika Mathur',
        photo: nayanika,
        position: 'Mentorship Program Director',
        description: 'My name is Nayanika, and I’ll be heading into my final year at university studying Cell and Molecular Biology and Human Biology. I am super excited to be a part of a team that is working towards helping students achieve their academic and professional endeavours while learning more about developer technologies. I hope to be able to provide a mentorship program that is both beneficial to mentors and mentees, where they can further develop skills and knowledge. I look forward to connecting students to mentors for guidance while learning more about the field myself.',
    },
    {
        name: 'Ellie Kang',
        photo: ellie,
        position: 'Project Director',
        description: 'Hello! I am Ellie and I’m a third year studying Mathematics, Statistics and Computer Science! I am interested in App Development, Leetcode and Startup! I will be a Project Director at GDSC and I’m so excited to make new and smart people at UofT! I also want to introduce people that technology can be fun!',
    },
    {
        name: 'Ege Mert Akin',
        photo: ege,
        position: 'Project Director',
        description: 'Hi, I am Mert. I am studying Computer Science Specialist with a Statistics Minor and I will be a second year student this fall. I am the Project Director of GDSC. I am really excited for being part of a club that has members all over the world and looking forward to organizing workshops, events and GDSC solution challenge. Some of my passions are Machine Learning, AI, software development, making software projects, Cybersecurity and joining hackathons.',
    },
    {
        name: 'Aurora Zhang',
        photo: blank,
        position: 'Mentorship Associate',
        description: 'Hello! My name is Aurora (like the Disney princess) and I will be a mentorship associate this year with GDSC this year. I am so excited to connect students with industry professionals and put my interpersonal skills to use. I am passionate about using technology to empower education.',
    },
    {
        name: 'Min Gi Kwon',
        photo: min,
        position: 'Mentorship Associate',
        description: 'Hello everyone, my name is Min Gi, but if it is difficult to pronounce feel free to call me Lucas. I am a second year in the CS Specialist program, as well as a mentorship associate in GDSC. I am excited to meet and work with everyone in the club, and I hope that I can be part of that effort to create a supportive learning environment for U of T students interested in technology.',
    },
    {
        name: 'Aryan Ghosh',
        photo: aryan,
        position: 'Marketing Director',
        description: 'Hi everyone! I’m Aryan, a first year engineering student and I’ll be your marketing director for this year! I’m really excited to be part of the team this year and I can’t wait to meet every member of the team. I’m really looking forward to learning competing alongside you all :)',
    },
    {
        name: 'Jasmine Yang',
        photo: jasmine,
        position: 'Marketing Director',
        description: 'Hi! my name is Jasmine and I will be a second year Rotman Commerce student at UofT this coming year. I’m really excited to join GDSC as a marketing director to help build this community together. Personally I am passionate about data analytics, so hope to explore more towards the field of technology',
    },
    {
        name: 'Ariana Jung',
        photo: ariana,
        position: 'Graphic Designer',
        description: 'My name is Ariana and I’m in my fourth year studying Computer Science at UofT. I joined GDSC as a Graphic Designer and I am excited to be a part of a community that is excited to learn about tech. I’m looking forward to all the great events and workshops that will be hosted by GDSC this year!',
    },
    {
        name: 'Hrid Patel',
        photo: hrid,
        position: 'Graphic Designer',
        description: 'Hey! My name is Hrid Patel, and I’m going into my second year in the Computer Science Specialist program. Outside of UofT, I spend a lot of my time watching sports and creating or playing music. I’ll be joining GDSC as a Graphic Designer, and I hope to make a strong positive impact in GDSC’s goals to empower youth and to help them grow as developers!',
    },
    {
        name: 'Inaas Asad',
        photo: inaas,
        position: 'Marketing Associate',
        description: 'I’m Inaas (she/her), and I’m a second-year student doing a specialist in Computer Science. As a Marketing Associate, I’m super excited to work with the rest of the marketing team and help in designing graphics and marketing events on social media! I look forward to building my own skills and knowledge through GDSC’s events and workshops alongside meeting wonderful new people.',
    },
    {
        name: 'Faatima Zehera Abidi',
        photo: faatima,
        position: 'Marketing Associate',
        description: 'My name is Faatima. I am a third-year student in computer engineering at UofT. I am GDSC’s Marketing Associate for the 2022-2023 school year. By joining GDSC, I am excited to market GDSC’s various workshops, specifically ones related to Google Cloud and different Google technologies. I hope to increase attendance at various GDSC events through effective marketing and maintain a good presence on social media. In terms of technology, I am passionate about software development, both frontend, and backend.',
    },
    {
        name: 'Zoya Chishtie',
        photo: zoya,
        position: 'Web Developer',
        description: 'Hi, I’m Zoya and  anECE2T4. I’m the Web Developer here at GDSC. As someone deeply passionate about technology, I’m excited to meet new people who share that interest and help them grow in this field. As the Web Developer, I wish to enhance my skillset surrounding technology and software, particularly web development. I look forward to hosting workshops to help people develop skills that will benefit them in careers related to technology, or simply to foster personal interest.',
    }
]

export class Profile extends Component {
    constructor() {
        super();
        this.state = {
          count: 0
        };
      }

    render() {
        return (
            <div className="memberContainer">
                <Grid id="hi" container justify="center" spacing={3}>
                    {members.map((member, i) => {
                        return (
                            <Member name={member.name} photo={member.photo} position={member.position} description={member.description}></Member>
                            /*<Grid item lg={3} md={4}>
                                <div className='member'>
                                    <a>
                                        <img className='memberPhoto' src={`${member.photo}`} alt='user' />
                                        <div className='memberInfo'>
                                            <h3 className='memberName'>{member.name}</h3>
                                            <small className='memberPosition'>{member.position}</small>
                                            {/* <p className='memberDesc'>{member.desc}</p> }
                                            <p>You clicked {this.state.count} times</p>
                                            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                                                Click me
                                            </button>
                                        </div>
                                    </a>
                                </div>
                            </Grid>*/
                        )
                    })}
                </Grid>
            <br></br>
            <br></br>
            </div>)
    }
}

export default Profile
