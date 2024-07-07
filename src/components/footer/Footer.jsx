import React from 'react'
import './footer.css'
import people from '../../assets/people.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="footer-main">
        <h1> Your <span className='sky'>hobby</span> your <span className='violet'>community</span></h1>
        <button className="btn">Get started</button>
        <div className="img">
            <img src={people} alt="" />
        </div>
        

    </div>
    <div className="footer">
            <div className="list1">
                <h3>Hobbycue</h3>
                <ol>
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Work With Us</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ol>
            </div>
            <div className="list1">
                <h3>How Do I</h3>
                <ol>
                    <li>Sign Up</li>
                    <li>Add a listing</li>
                    <li>Claim Listening</li>
                    <li>Post a query</li>
                    <li>Add a blog post</li>
                    <li>Other queries</li>
                </ol>
            </div>
            <div className="list1">
                <h3>Quick Links</h3>
                <ol>
                    <li>Listings</li>
                    <li>Blog Posts</li>
                    <li>Shop / Store</li>
                    <li>Community</li>
                    
                </ol>
            </div>
            <div className="social">
                <h3>Social Media</h3>
                <div className="icons" id
                ="iconn">

                
                <div className="links" href='#'>
                <AiFillInstagram />

                </div>
                <div className="links" href='#'>
                <FaFacebookF />

                </div>
                <div className="links" href='#'>
                <RiTwitterXLine />

                </div>
                <div className="links" href='#'>
                <TiSocialLinkedin />

                </div>
                <div className="links" href='#'>
                <FaWhatsapp />


                </div>
                </div>
                <div className="search-btn">
                    <h3>Invite Friends</h3>
                    <input type="text" />
                    <button>invite</button>
                </div>
            </div>
    </div>
    </>
  )
}

export default Footer