import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../images/041.jpeg";
import Common from './Common';

const About = () => {
    return (
        <>
            <Common name="About Me" name2="Hello there,I'm Anshi currently pursuing my B.tech from CS but also a person who loves to travel and discover new places .
            To me,life is indeed a thrilling episode and meant to be lived fully.So even if you're lacking money or time,there are countless ways to embark on adventure
            .And here I'm to guide you through it."
            imgsrc={web} visit='/Contact' btn="Contact Now"/>
        </>
    );
};

export default About ;