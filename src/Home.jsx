import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/042.jpg";
import Common from './Common';

const Home = () => {
    return (
        <>
          <Common name= 'Adventure Awaits!' name2="Explore the world with Trouvaille" imgsrc={web} visit='/Destinations' btn="Get Started"/>
        </>
    );
};

export default Home;