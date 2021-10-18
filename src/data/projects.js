import player from '../assets/player.png';
import error from '../assets/error.png';
import oauth from '../assets/oauth.png';
import rss from '../assets/rss.png';

import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodeDotJs,
    SiMongodb,
    SiJavascript,
    SiReact,
    SiRedux,
} from 'react-icons/si';
import { ReactComponent as expressjsIcon } from '../assets/expressjs.svg';

const projects = [
    {
        title: 'Custom SpeechKit Audio Player',
        description : 'Work experience project - developed a custom audio player based on SpeechKit\'s PlayerSDK',
        stack: [SiHtml5, SiCss3, SiJavascript, SiReact],
        github: 'https://github.com/Ghazvinie/custom-speechkit-audio-player',
        live: 'ff',
        img: player
    },
    {
        title: 'SpeechKit RSS Validator',
        description : 'Full Stack work experience project - this involved creating an RSS feed validator for clients to check their feeds are formatted correctly and include all necessary data.',
        stack: [SiHtml5, SiCss3, SiJavascript, SiReact, SiNodeDotJs, expressjsIcon],
        github: 'https://github.com/Ghazvinie/rss_validator',
        live: 'https://speechkit-rss-validator.herokuapp.com/',
        img: rss
    },
    {
        title: 'Express Error Handler',
        description : 'Some examples of how errors can be handled in an ExpressJs application.',
        github: 'https://github.com/Ghazvinie/express-error-handler',
        live: '',
        img: error
    },
    {
        title: 'OAuth 2.0 Sign Up and Sign In',
        description : 'An example of user authentication and authorisation based on the OAuth protocol.',
        github: 'https://github.com/Ghazvinie/user-auth-with-passport-oauth',
        live: '',
        img: oauth
    },
    {
        title: 'User Auth With JWT',
        description : 'An example of user authentication and authorisation using JWT and CSRF tokens.',
        github: 'https://github.com/Ghazvinie/user-auth-with-jwt',
        live: '',
        img: 'somepic'
    },
    {
        title: 'MongoDB CRUD App',
        description : 'An extension of a FCC challenge to create an exercise tracking app.',
        github: 'https://github.com/Ghazvinie/mongodb-crud-exercise-tracker-app',
        live: '',
        img: 'somepic'
    },
    {
        title: 'Conway\'s Game of Life',
        description : 'JavaScript implementation of Conway\'s Game of Life.',
        github: 'https://github.com/Ghazvinie/conways-game-of-life',
        live: '',
        img: 'somepic'
    },
    
]

export default projects;