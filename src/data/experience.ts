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
  description: string
  achievements: Array<string>
  start: string
  end: string
  src: string
  alt: string
}

export const experiences: ExperienceInterface[] = [
  {
    name: 'SAED Int Services',
    logo: '/work/saed.webp',
    role: 'Frontend Engineer',
    type: 'full-time',
    description:
      'Collaborated closely with front-end engineers, back-end engineers, QA teams, and project managers to successfully execute the full software development life cycle, ensuring timely delivery of high-quality web solutions.',
    achievements: [
      'Built a modular admin portal with Vue.js, supporting dynamic user roles and real-time data updates',
      'Refactored monolithic front-end architecture into microservices using StencilJS, reducing deployment time by 50%',
      'Implemented a workspace application with React and TypeScript, increasing user engagement by 25%',
      'Practiced Agile methodologies, participating in 100+ sprint cycles and cross-functional stand-ups',
    ],
    start: '18/01/2021',
    end: '31/08/2025',
    src: '',
    alt: 'Saed',
  },
  {
    name: 'Mungin',
    logo: '/work/mungin.webp',
    role: 'Front-End Engineer',
    type: 'contract',
    description:
      'Delivered responsive web applications for a fast-paced startup, enhancing user experience and performance across multiple platforms',
    achievements: [
      'Translated over 15 UI screens into responsive Vue.js components using TailwindCSS, achieving pixel-perfect fidelity across devices',
      'Collaborated with 3 back-end engineers and 2 DevOps specialists to integrate RESTful APIs and infrastructure endpoints seamlessly',
      'Integrated 10+ dynamic API endpoints to fetch and render real-time data with optimal performance',
      'Reduced page load time by 35% through code refactoring and performance tuning',
    ],
    start: '31/01/2021',
    end: '31/04/2022',
    src: '',
    alt: 'Mungin',
  },
  {
    name: 'Avetium Consult',
    logo: '/work/avetium.webp',
    role: 'Information Security Engineer',
    type: 'part-time',
    description:
      'Supported diverse IT infrastructure with a focus on Linux and Windows security and configuration',
    achievements: [
      'Managed Active Directory roles and permissions',
      'Deployed biometric systems and encrypted company devices',
      'Installed and maintained routers, LANs, and printers',
      'Conducted security awareness training and enforced compliance protocols  ',
    ],
    start: '16/07/2023',
    end: '29/11/2023',
    src: '',
    alt: 'Avetium',
  },
]
