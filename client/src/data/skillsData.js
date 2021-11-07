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
    SiGit,
    SiDocker,
    SiAmazonaws,
    SiNginx
} from 'react-icons/si';
import { ReactComponent as expressjsIcon } from '../assets/icons/expressjs.svg'
import { ReactComponent as restIcon } from '../assets/icons/api.svg'


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

    typescript: {
        name: 'TypeScript',
        icon: SiTypescript,
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

    typescript: {
        name: 'TypeScript',
        icon: SiTypescript,
    },
    mongodb: {
        name: 'MongoDB',
        icon: SiMongodb,
    },
    restApi: {
        name: 'Rest APIs',
        icon: restIcon
    },
    graphql: {
        name: 'GraphQL',
        icon: SiGraphql
    },
    docker: {
        name: 'Docker',
        icon: SiDocker
    }
},
{
    git: {
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


    bash: {
        name: 'Bash',
        icon: SiGnubash,
    },
    postgresql: {
        name: 'PostgreSQL',
        icon: SiPostgresql
    },
    aws : {
        name : 'AWS',
        icon: SiAmazonaws
    },
    nginx : {
        name: 'Nginx',
        icon: SiNginx
    }

}
];

export default skills;

