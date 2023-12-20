import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {

    return (
        <div className="About">
            <h1>About This Project</h1>
            <h2>What is Book-et List?</h2>
            <div className="AboutPara">
                <p>Book-et list is our vision for an easy and convenient place to track your reading, and be introduced to new
                titles. Our hope is for users to be able to find new joys of reading, as well as the titles that matter most to them!</p>
            </div>
            <h2>What can you do?</h2>
            <div className="AboutPara">
                <p>Once you log in or regiester, you can navigate to your Bookshelf tab, where you can create and edit book lists that
                interest you. Tired of the same old? You can head over to the Explore tab to get see some titles from popular genres.
                For a more stylized suggestion, the Home tab has a recommendation list that tailored from your own tastes and readings!
                There, you can also view and track your recent reading history.</p>
            </div>
            <h2>How does it work?</h2>
            <div className="AboutPara">
                <p>Our actions are mainly powered by public APIs generously hosted by the The Internet Archive through their Open Library
                project. Our title library is curated from their databases, for your personal satisfaction.</p>
            </div>
            <h2>Who's on our team?</h2>
            <div className="AboutPara">
                <p>This site and service is the result of the combined work of 3 students at the University Of Maryland: <b>Asongafac Asaha,
                Laksha Senthilkumar, and Rabindra Suwal</b>.</p>
            </div>
        </div>
    );
};


export default About;