import player from '../assets/projectPics/player.png';
import error from '../assets/projectPics/error.png';
import oauthPassport from '../assets/projectPics/oauthPassport.png';
import rss from '../assets/projectPics/rss.png';
import jwt from '../assets/projectPics/jwt.png';
import missing from '../assets/projectPics/missing.jpg';

import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodeDotJs,
    SiMongodb,
    SiJavascript,
    SiReact,
    SiRedux,
    SiJsonwebtokens
} from 'react-icons/si';
import { ReactComponent as expressjsIcon } from '../assets/icons/expressjs.svg';
import { ReactComponent as oauthIcon } from '../assets/icons/oauthIcon.svg';
import { ReactComponent as passportIcon } from '../assets/icons/passport.svg';

const projects = [
    {
        title: 'Custom SpeechKit Audio Player',
        description: 'Work experience project - developed a custom audio player based on SpeechKit\'s PlayserSDK along with a guide on how this can be done.',
        stack: [{ icon: SiHtml5, text: 'HTML' }, { icon: SiCss3, text: 'CSS' }, { icon: SiJavascript, text: 'JavaScript' }, { icon: SiReact, text: 'ReactJS' }],
        github: 'https://github.com/Ghazvinie/custom-speechkit-audio-player',
        live: 'https://speechkit-custom-audio-player.herokuapp.com/',
        img: player || missing
    },
    {
        title: 'SpeechKit RSS Validator',
        description: 'Work experience project - this involved creating an RSS feed validator for clients to check their feeds are formatted correctly and include all necessary data.',
        stack: [{ icon: SiHtml5, text: 'HTML' }, { icon: SiCss3, text: 'CSS' }, { icon: SiJavascript, text: 'JavaScript' }, { icon: SiReact, text: 'ReactJS' }, { icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }],
        github: 'https://github.com/Ghazvinie/rss_validator',
        live: 'https://speechkit-rss-validator.herokuapp.com/',
        img: rss || missing
    },
    {
        title: 'Express Error Handler',
        description: 'Examples of how errors can be handled in an ExpressJs application, and how these errors might be processed to provide relevant information.',
        stack: [{ icon: SiJavascript, text: 'JavaScript' }, { icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }],
        github: 'https://github.com/Ghazvinie/express-error-handler',
        live: '',
        img: error || missing
    },
    {
        title: 'OAuth 2.0 Sign Up and Sign In',
        description: 'User authentication and authorisation based on the OAuth 2.0 protocol. Through use of the Passport middleware the user is able to sign up with their Google account, or by providing their own details.',
        stack: [{ icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }, { icon: oauthIcon, text: 'OAuth 2.0' }, { icon: passportIcon, text: 'Passport' }, { icon: SiMongodb, text: 'MongoDB' }],
        github: 'https://github.com/Ghazvinie/user-auth-with-passport-oauth',
        live: 'https://oauth-passport-signup.herokuapp.com/',
        img: oauthPassport || missing
    },
    {
        title: 'User Auth With JWT',
        description: 'User authentication and authorisation using JWT. After signup the user can access a protected resource, and change their password. CSRF tokens are used to verify legitimate requests.',
        github: 'https://github.com/Ghazvinie/user-auth-with-jwt',
        stack: [{ icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }, { icon: SiJsonwebtokens, text: 'JWT' }, { icon: SiMongodb, text: 'MongoDB' }],
        live: 'https://signup-jwt.herokuapp.com/',
        img: jwt
    },
    {
        title: 'MongoDB CRUD App',
        description: 'An extension of a FCC challenge to create an exercise tracking app.',
        github: 'https://github.com/Ghazvinie/mongodb-crud-exercise-tracker-app',
        live: '',
        img: null || missing
    },
    {
        title: 'Conway\'s Game of Life',
        description: 'JavaScript implementation of Conway\'s Game of Life.',
        github: 'https://github.com/Ghazvinie/conways-game-of-life',
        live: '',
        img: 'somepic' || missing
    },

]

export default projects;