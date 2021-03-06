import player from '../assets/projectPics/player.png';
import error from '../assets/projectPics/error.png';
import oauthPassport from '../assets/projectPics/oauthPassport.png';
import rss from '../assets/projectPics/rss.png';
import jwt from '../assets/projectPics/jwt.png';
import mongoCrud from '../assets/projectPics/mongoCrud.png';
import conway from '../assets/projectPics/conway.png';
import payment from '../assets/projectPics/payment.png';
import site from '../assets/projectPics/site.png';
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
    SiJsonwebtokens,
    SiDocker
} from 'react-icons/si';
import { ReactComponent as expressjsIcon } from '../assets/icons/expressjs.svg';
import { ReactComponent as oauthIcon } from '../assets/icons/oauthIcon.svg';
import { ReactComponent as passportIcon } from '../assets/icons/passport.svg';

const projects = [
    {
        title: 'SpeechKit Custom Audio Player',
        description: 'Work experience project - developed a custom audio player based on SpeechKit\'s PlayserSDK along with a guide on how this can be done.',
        stack: [{ icon: SiHtml5, text: 'HTML' }, { icon: SiCss3, text: 'CSS' }, { icon: SiJavascript, text: 'JavaScript' }, { icon: SiReact, text: 'ReactJS' }],
        github: 'https://github.com/Ghazvinie/custom-speechkit-audio-player',
        live: 'https://speechkit-custom-audio-player.herokuapp.com/',
        img: player || missing
    },
    {
        title: 'SpeecKit RSS Validator',
        description: 'Work experience project - this involved creating an RSS feed validator for clients to check their feeds are formatted correctly and include all necessary data.',
        stack: [{ icon: SiHtml5, text: 'HTML' }, { icon: SiCss3, text: 'CSS' }, { icon: SiJavascript, text: 'JavaScript' }, { icon: SiReact, text: 'ReactJS' }, { icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }],
        github: 'https://github.com/Ghazvinie/rss_validator',
        live: 'https://speechkit-rss-validator.herokuapp.com/',
        img: rss || missing
    },
    {
        title: 'Portfolio Site',
        description: 'Yes, this site you\'re on! No live link as you\'re already viewing it. Built with ReactJs, Dockerized and then deployed on Amazon Web Services EC2 instance.',
        stack: [{ icon: SiHtml5, text: 'HTML' }, { icon: SiCss3, text: 'CSS' }, { icon: SiJavascript, text: 'JavaScript' }, { icon: SiReact, text: 'ReactJS' }, {icon: SiTailwindcss, text: 'Tailwind CSS'}, { icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }, {icon: SiDocker, text: 'Docker' } ],
        github: 'https://github.com/Ghazvinie/rss_validator',
        img: site || missing
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
        title: 'User Auth using OAuth 2.0',
        description: 'User auth implemented with Passport and using the OAuth2.0 protocol. The user can sign up with their Google account, or by providing their own details.',
        stack: [{ icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }, { icon: oauthIcon, text: 'OAuth 2.0' }, { icon: passportIcon, text: 'Passport' }, { icon: SiMongodb, text: 'MongoDB' }],
        github: 'https://github.com/Ghazvinie/user-auth-with-passport-oauth',
        live: 'https://oauth-passport-signup.herokuapp.com/',
        img: oauthPassport || missing
    },
    {
        title: 'User Auth using JWT',
        description: 'User auth using JWT. After sign up the user can access a protected resource and change their password. CSRF tokens are used to verify legitimate requests.',
        stack: [{ icon: SiJavascript, text: 'JavaScript' }, { icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }, { icon: SiJsonwebtokens, text: 'JWT' }, { icon: SiMongodb, text: 'MongoDB' }],
        github: 'https://github.com/Ghazvinie/user-auth-with-jwt',
        live: 'https://signup-jwt.herokuapp.com/',
        img: jwt || missing
    },
    {
        title: 'Node Payment Integration',
        description: 'Basket and checkout application that uses the Stripe and PayPal SDKs to allow the user to complete their purchase with either of these providers.',
        stack: [{ icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }, { icon: SiJavascript, text: 'JavaScript' }],
        github: 'https://github.com/Ghazvinie/payment-integration',
        live: 'https://paypal-stripe-payment.herokuapp.com/',
        img: payment || missing
    },
    {
        title: 'Conway\'s Game of Life',
        description: 'Made solely with HTML, CSS and vanilla JavaScript, this is an implementation of Conway\'s Game of Life, the cellular automaton. Pick some cells and start some life!',
        stack: [{ icon: SiJavascript, text: 'JavaScript' }, { icon: SiHtml5, text: 'HTML' }, { icon: SiCss3, text: 'CSS' }],
        github: 'https://github.com/Ghazvinie/conways-game-of-life',
        live: 'https://game-of-life-conways.herokuapp.com/',
        img: conway || missing
    },
    {
        title: 'MongoDB CRUD App',
        description: 'An extension of a FCC challenge to create an exercise tracking app. It was extended by creating additional database methods and some extra functionality.',
        stack: [{ icon: SiNodeDotJs, text: 'NodeJs' }, { icon: expressjsIcon, text: 'ExpressJs' }, { icon: SiMongodb, text: 'MongoDB' }],
        github: 'https://github.com/Ghazvinie/mongodb-crud-exercise-tracker-app',
        live: 'https://freecc-exercise-tracker.herokuapp.com/',
        img: mongoCrud || missing
    },

]

export default projects;