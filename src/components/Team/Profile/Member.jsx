import React, { Component } from 'react'
import { Grid, Container, Typography } from "@material-ui/core"
import "./Popup.css"

export class Member extends Component {
    constructor(member) {
        super(member);
        this.member = member
        this.state = {
          count: 0
        };
      }

      render() {
        return (     
            <Grid item lg={3} md={4}>

                <div id={this.member.name} class="modal">

                    <div class="modal-content">
                        <span class="close" onClick={() => {
                        let modal = document.getElementById(this.member.name);

                        // Get the button that opens the modal
                        let btn = document.getElementById("myBtn");
                        
                        // Get the <span> element that closes the modal
                        let span = document.getElementsByClassName("close")[0];
                        
                        // When the user clicks on the button, open the modal
                        modal.style.display = "none";
                        
                    }
                    }>X</span>
                            <h3>{this.member.name} - {this.member.position}</h3>
                            <p>{this.member.description}</p>
                    </div>
                </div>
                <button id="popupBtn" onClick={() => {
                                let modal = document.getElementById(this.member.name);

                                // Get the button that opens the modal
                                let btn = document.getElementById("myBtn");
                                
                                // Get the <span> element that closes the modal
                                let span = document.getElementsByClassName("close")[0];
                                
                                // When the user clicks on the button, open the modal
                                modal.style.display = "block";
                                
                            }
                        }>
                <div className='member'>
                        <img className='memberPhoto' src={`${this.member.photo}`} alt='user' />
                        <div className='memberInfo'>
                            
                                <h3 className='memberName'>{this.member.name}</h3>
                                <small className='memberPosition'>{this.member.position}</small>
                                {/* <p className='memberDesc'>{member.desc}</p> */}
                        </div>
                </div>
                </button>
            </Grid>

        )}
                
}

export default Member