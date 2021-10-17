import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodeDotJs,
    SiMongodb,
    SiJavascript,
    SiGithub,
    SiReact,
    SiNpm,
    SiYarn,
    SiRedux,
    SiGnubash,
    SiTypescript,
    SiPostgresql,
    SiPostman,
    SiGraphql,
    SiGit
} from 'react-icons/si';
import { ReactComponent as expressjsIcon } from '../assets/expressjs.svg'
import { ReactComponent as restIcon } from '../assets/api.svg'


const skills = [{
    html5: {
        name: 'HTML5',
        icon: SiHtml5,
    },
    css3: {
        name: 'CSS3',
        icon: SiCss3,
    },
    javascript: {
        name: 'JavaScript',
        icon: SiJavascript,
    },
    react: {
        name: 'React',
        icon: SiReact,
    },
    redux: {
        name: 'Redux',
        icon: SiRedux,
    },
    tailwind: {
        name: 'TailwindCSS',
        icon: SiTailwindcss,
    }
},
{

    node: {
        name: 'NodeJs',
        icon: SiNodeDotJs,
    },
    express: {
        name: 'ExpressJs',
        icon: expressjsIcon,
    },
    javascript: {
        name: 'JavaScript',
        icon: SiJavascript,
    },
    mongodb: {
        name: 'MongoDB',
        icon: SiMongodb,
    },
    restApi: {
        name: 'Rest APIs',
        icon: restIcon
    }
}, 
{
    git : {
        name: 'Git',
        icon: SiGit
    },
    github: {
        name: 'GitHub',
        icon: SiGithub,
    },
    npm: {
        name: 'npm',
        icon: SiNpm,
    },
    yarn: {
        name: 'Yarn',
        icon: SiYarn,
    },
    postman: {
        name: 'Postman',
        icon: SiPostman,
    }
},
{

    typescript: {
        name: 'TypeScript',
        icon: SiTypescript,
    },

    bash: {
        name: 'Bash',
        icon: SiGnubash,
    },
    postgresql: {
        name: 'PostgreSQL',
        icon: SiPostgresql
    },
    graphql: {
        name: 'GraphQL',
        icon: SiGraphql
    }

}
];

export default skills;

