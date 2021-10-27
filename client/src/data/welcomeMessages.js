const hours = new Date().getHours();
const timeGreet = hours > 0 && hours < 7 ? 'Good morning (you\'re up early)'
    : hours >= 7 && hours < 12 ? 'Good morning'
        : hours >= 12 && hours < 18 ? 'Good afternoon'
            : hours >= 18 && hours < 23 ? 'Good evening'
                : hours >= 23 && hours <= 23 ? 'Good evening (you\'re up late)' : 'Welcome';


const messages  = [
    `${timeGreet}, I'm Daniel.`,
    `${timeGreet}, I'm Daniel. `,
    `${timeGreet}, I'm Daniel.`,
    'I know:',
    'I know: ',
    'I know:',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node.js',
    'Express.js',
    'Git / GitHub',
    'MongoDB',
    'Restful APIs',
    'GraphQL',
    'Docker',
    'Authorisation / Authentication',
    'NPM / Yarn'
]

export default messages;