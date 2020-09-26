import React from 'react';
import '../../Main.css';
import classes from './About.module.css';

import { Link } from 'react-router-dom';

import {scrollAndPageFlipSound} from '../../utils/projectFunctions';

import Astronaut from '../../assets/images/about/astronaut.svg';

export const AboutPage = () => {

    return (
        <div className={[classes.AboutPage, 'flex-content', 'Page'].join(' ')} >
            <h1 datatype="What do I do?">What do I do?</h1>

            <img className={classes.Astronaut} src={Astronaut} alt="That's me"/>

            <p>
                I build web sites and applications by utilizing the most progressive web technologies that you can get familiar with on 
                <Link onClick={scrollAndPageFlipSound} to="/skills"> the next page. </Link> 
                During the development process, I adhere to the solutions that provide maximum user experience with minimalistic design.
            </p>
        </div>
    )
}