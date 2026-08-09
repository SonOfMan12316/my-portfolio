export type ExperienceType =
  | 'full-time'
  | 'part-time'
  | 'freelancer'
  | 'intern'
  | 'volunteer'
  | 'contract'

export interface ExperienceInterface {
  name: string
  logo: string
  role: string
  type: ExperienceType
  location?: string
  description: string
  achievements: Array<string>
  start: string
  end: string
  src: string
  alt: string
}

export const experiences: ExperienceInterface[] = [
  {
    name: 'FamVerse Ltd',
    logo: '',
    role: 'Full Stack & Mobile Engineer',
    type: 'full-time',
    location: 'United Kingdom (Remote)',
    description:
      'Led end-to-end development of a cross-platform product spanning iOS, Android, and web, directing 2 mid-level engineers and translating UI/UX designs into production-ready interfaces.',
    achievements: [
      'Built REST API integrations and real-time data flows for 1,000+ users, with 90% test coverage and documentation other engineers could build on without asking me.',
      'Cut API response times by 45% with a Redis caching layer, optimizing the application for speed and scale.',
      'Set up Sentry + logging pipelines so we could see issues before users reported them.',
      'Built a background notification system with retry logic and dead-letter queues because alerts need to actually arrive.',
    ],
    start: '01/10/2025',
    end: '',
    src: '',
    alt: 'FamVerse',
  },
  {
    name: 'SAED Integrated Services',
    logo: '/work/saed.webp',
    role: 'Frontend Engineer',
    type: 'full-time',
    location: 'Lagos, Nigeria (Remote)',
    description:
      'Led a team of 2–3 junior and mid-level engineers reviewed their code, paired with them, and helped them level up.',
    achievements: [
      'Built a Vue.js admin portal for managing role-based access with real-time updates.',
      'Built a React workspace for medical centers and practitioners to handle patient records, consultations, nursing, pharmacy, laboratory, and radiography.',
      'Split the frontend into independent, reusable modules so one part failing would not take down the rest.',
      'Worked across 500+ Agile sprints, including sprint planning and cross-functional collaboration with backend, DevOps, and design.',
    ],
    start: '18/01/2021',
    end: '31/08/2025',
    src: '',
    alt: 'SAED',
  },
  {
    name: 'Mungin',
    logo: '/work/mungin.webp',
    role: 'Frontend Engineer',
    type: 'contract',
    location: 'Lagos, Nigeria (Remote)',
    description:
      'Delivered responsive Vue.js web apps, translating UI/UX designs into functional pages across phones, tablets, and desktops.',
    achievements: [
      'Cut page load times by 35%, optimizing performance on mobile and slow networks.',
      'Integrated REST APIs with real-time updates and proper error handling.',
      'Participated in code reviews and worked with backend and DevOps engineers to ship to production.',
    ],
    start: '01/01/2022',
    end: '30/04/2023',
    src: '',
    alt: 'Mungin',
  },
]
