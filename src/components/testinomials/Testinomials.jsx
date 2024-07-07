import React from 'react'
import './testinomials.css'
import { IoIosAddCircle } from "react-icons/io";
import  user  from '../../assets/avatar-2.svg';
import { FaPlay } from "react-icons/fa";

const Testinomials = () => {
  return (
    <div className="testinomials">
        <div className="add">
            
            <div className="head">
            <IoIosAddCircle />
            <h3>Add Your Own</h3>
            </div>
            <div className="para">
                <p>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets ? Or you know someone who should be on hobbycue? Go ahead add on your own page.</p>
            </div>
            <div className="cardbtn">
                <button>Add new</button>
            </div>
          
          
        </div>
        <div className="testinomial">
            <div className="header">
                <span>"</span>
                <h3>Testinomials</h3>
            </div>
            <div className="para2">
                <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
            </div>
            <div className="person">
                <div className="audio">
                    <div className="play">
                    <FaPlay />
                    </div>
                    <div className="line2">
                        <div className="dot"></div>
                     <div className="line"></div>
                        <div className="time">0:00</div>
                    
                    </div>
                    
                    <div className="user-id">
                        <img className='user-idd' src={user} alt="user" />

                    </div>
                </div>
                <div className="user">
                       <div className="user-acc">
                            <img src={user} alt="" />
                            <h5>Shailendra <span>Web Developer</span></h5>
                       </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testinomials