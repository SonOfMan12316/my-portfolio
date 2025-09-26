export interface ProjectInterface {
  title: string
  about: string
  technologies: Array<string>
  image: string
  link: string
}

export const projects = [
  {
    title: 'Finance Tracker',
    about: `Personal finance app track your budgets, pots, transactions and recurring bills(in-view).
    `,
    technologies: [
      'React',
      'Vite',
      'Tailwind',
      'Typescript',
      'Firebase',
      'Zustand',
    ],
    image: '/projects/finance-tracker.webp',
    link: 'https://mancy-finance-tracker.vercel.app',
    categories: ['personal'],
  },
  {
    title: 'Weather Now',
    about: `A responsive weather app with search functionality, unit conversion, and detailed forecasts using the Open-Meteo API. `,
    technologies: ['React', 'Vite', 'Typescript', 'Open Meteo API', 'Tailwind'],
    image: '/projects/weather.webp',
    link: 'https://weather-now-hackathon.vercel.app/',
    categories: ['personal'],
  },
  {
    title: 'Create your custom chill-guy',
    about: `Create your custom chill guy meme. You can customize the text, colors, and accessories to make it your own. Once you're done, you can download or copy your creation as an image file.`,
    technologies: ['React', 'Vite', 'Typescript', 'Tailwind', 'Html2canvas'],
    image: '/projects/chill_guy.webp',
    link: 'https://create-your-chill-guy-meme.vercel.app/',
    categories: ['personal'],
  },
  {
    title: 'Password Strength Checker',
    about: `A password strength checker that evaluates the strength of your password based on length, character variety, and common patterns. It provides real-time feedback and suggestions to help you create a stronger password.`,
    technologies: [
      'React',
      'Vite',
      'Jest',
      'i18next',
      'Jest',
      'Redux',
      'Zustand',
    ],
    image: '/projects/password.webp',
    link: 'https://ikue-password-strength-checker.netlify.app/',
    categories: ['personal'],
  },

  {
    title: 'Covenant Connect Website',
    about: `A church website built to submit attendance for an event, view sermons, and read articles. Other features include a contact form, location map, and social media links. Some are still in development.`,
    technologies: [
      'React',
      'Tailwind',
      'Typescript',
      'Zustand',
      'Zod',
      'i18next',
    ],
    image: '/projects/covenant.webp',
    link: 'https://covenant-connect.com/',
    categories: ['Open Source'],
  },
  {
    title: 'Phonebook Contact App',
    about:
      'Personal project to practice redux state management and get the basic concept.',
    technologies: ['React', 'Vite', 'Redux', 'yup'],
    image: '/projects/phonebook.webp',
    link: 'https://sonofman-phonebook-contact.vercel.app/',
    categories: ['personal'],
  },
]
