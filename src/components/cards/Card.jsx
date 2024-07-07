import React from 'react'
import './card.css';
import { PiUsersThreeFill } from "react-icons/pi";
import { MdPlace } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { RiTodoFill } from "react-icons/ri";

const Card = () => {
  return (
    <div className="cards">
        <div className="card">
            <div className="card1" id
            ="card1">
                <div className="people">
                <PiUsersThreeFill />
                <p>people</p>
                </div>
                <div className="para">
                    Find a teacher, coach, or expert ofr your hobby interest in your locality . Find a parter, teammate, accompanisht or collaborator
                </div>
                <div className="cardbtn">
                    <button>Connect</button>
                </div>
            </div>
            <div className="card1" id='card2'>
                <div className="people">
                <MdPlace />
                <p>Place</p>
                </div>
                <div className="para">
                    Find a class, school, auditorium studio shop or an event venue. Book a slot at venues that allows booking through hotels.
                </div>
                <div className="cardbtn">
                    <button>Meet Up</button>
                </div>
            </div>
            <div className="card1" id='card3'>
                <div className="people">
                <BsBagCheckFill />

                <p>Product</p>
                </div>
                <div className="para">
                    Find equipment or supplies required for your hobby. Buy rent or borrow from shops, online stores or from community members
                </div>
                <div className="cardbtn">
                    <button>Get it</button>
                </div>
            </div>
            <div className="card1" id='card4'>
                <div className="people">
                <RiTodoFill />
                <p>Program</p>
                </div>
                <div className="para">
                    Find events, meetups and workshops related to your hobby. Register or buy tickets online
                </div>
                <div className="cardbtn">
                    <button>Attend</button>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Card