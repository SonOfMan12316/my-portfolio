export interface ProjectInterface {
  title: string
  about: string
  technologies: Array<string>
  image: string
  link: string
  github?: string
  categories: Array<string>
  featured?: boolean
  liveOnMobile?: boolean
  video?: string
}

export const projects = [
  {
    title: 'IntelliQuest',
    about:
      'IntelliQuest is a school management and AI learning platform I built for Nigerian secondary schools. Schools use it to run academics, fees, and exams; students use it to prep for JAMB, WAEC, and NECO with an AI tutor called Clara. The tricky part was shipping two separate products from one codebase: a B2B school portal and a B2C study app, without them stepping on each other.',
    technologies: ['Next.js', 'TypeScript', 'Express.js'],
    image: 'https://res.cloudinary.com/dolawuzw6/video/upload/so_0,f_jpg,q_auto/v1786233453/202608090053_xy8pst.jpg',
    video: 'https://res.cloudinary.com/dolawuzw6/video/upload/v1786233453/202608090053_xy8pst.mp4',
    link: 'https://www.intelliquest.app/',
    categories: ['Production', 'Web', 'Full Stack'],
    featured: false,
  },
  {
    title: 'Kinnected',
    about:
      'Kinnected is a family management platform I built solo from zero to production. Families use it to organize meals, tasks, shopping, calendars, and files. I handled everything the backend, the mobile app (iOS and Android), and making sure it stayed fast and reliable for 1,000+ users.',
    technologies: [
      'React Native',
      'NestJS',
      'TypeScript',
      'MongoDB',
      'Redis',
      'Firebase',
    ],
    image:
      'https://res.cloudinary.com/dolawuzw6/video/upload/so_0,f_jpg,q_auto/v1782310277/Kinnected_jegccg.jpg',
    video:
      'https://res.cloudinary.com/dolawuzw6/video/upload/v1782310277/Kinnected_jegccg.mp4',
    link: '',
    liveOnMobile: true,
    categories: ['Featured', 'Production', 'Mobile', 'Full Stack'],
    featured: true,
  },
  {
    title: 'Clohea Admin Portal',
    about:
      'Clohea is an admin portal I built for a healthcare company. Staff use it to manage practitioners and verify credentials. The tricky part was making sure different user types saw only what they needed built with Vue and TypeScript.',
    technologies: [
      'Vue3',
      'VueX',
      'Bootstrap',
      'Typescript',
    ],
    image: '/projects/clohea-admin-portal.webp',
    link: 'http://adminportal.staging.clohea.com/',
    categories: ['Production', 'Web'],
    featured: false,
  },
  {
    title: 'Bookmark Manager',
    about:
      'A bookmark manager I built because I kept losing links across devices. Save, tag, search, and filter bookmarks from anywhere backend syncs everything so nothing gets lost.',
    technologies: [
      'React',
      'Next',
      'Tailwind',
      'Typescript',
      'Nest',
      'SQL',
    ],
    image: '/projects/bookmark-manager.webp',
    link: 'https://bookmark-manager-woad.vercel.app/sign-in',
    github: 'https://github.com/SonOfMan12316/Bookmark-Manager',
    categories: ['Product', 'Web', 'Full Stack'],
    featured: false,
  },
  {
    title: 'Finance Tracker',
    about:
      'A personal finance app for tracking budgets and transactions. Real-time updates, clean dashboard, and the whole thing syncs with Firebase so I can check it anywhere.',
    technologies: [
      'React',
      'Vite',
      'Tailwind',
      'Typescript',
      'Firebase',
      'Zustand',
    ],
    image: '/projects/finance-tracker.webp',
    link: 'https://mancy-finance-tracker.vercel.app/sign-in',
    github: 'https://github.com/SonOfMan12316/Finance-Tracker',
    categories: ['Product', 'Web', 'Full Stack'],
    featured: false,
  },
  {
    title: 'Create Your Custom Chill Guy',
    about:
      'Create your custom Chill Guy meme with editable text, colors, and accessories, then copy or download the final image. Built as a playful UI product focused on fast interactions and clean client-side rendering.',
    technologies: ['React', 'Vite', 'Typescript', 'Tailwind', 'Html2canvas'],
    image: '/projects/chill_guy.webp',
    link: 'https://create-your-chill-guy-meme.vercel.app',
    categories: ['Product', 'Web'],
    featured: false,
  },
]
