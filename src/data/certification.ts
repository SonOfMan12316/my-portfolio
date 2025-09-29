export interface CertificationIssuer {
  name: string
  image: string
}

export interface CertificationInterface {
  title: string
  issuer: CertificationIssuer
  date: string
  link: string
  skills: string[]
}

export const certifications: CertificationInterface[] = [
  {
    title: 'Legacy JavaScript Algorithms and Data Structures',
    issuer: {
      name: 'freeCodeCamp',
      image: '/cover/freecodecamp.webp',
    },
    date: '01/08/2022',
    link: 'https://www.freecodecamp.org/certification/mancydev/javascript-algorithms-and-data-structures',
    skills: ['javascript', 'DSA'],
  },
  {
    title: 'Front End Development Libraries',
    issuer: {
      name: 'freeCodeCamp',
      image: '/cover/freecodecamp.webp',
    },
    date: '19/03/2024',
    link: 'https://www.freecodecamp.org/certification/mancydev/front-end-development-libraries',
    skills: ['React', 'Redux'],
  },
  {
    title: 'Back End Development and APIs',
    issuer: {
      name: 'freeCodeCamp',
      image: '/cover/freecodecamp.webp',
    },
    date: '25/01/2025',
    link: 'https://www.freecodecamp.org/certification/mancydev/back-end-development-and-apis',
    skills: ['Node', 'Express', 'MongoDB'],
  },
]
