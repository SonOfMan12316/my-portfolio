import { StackInterface, stack } from './stack'
import { SocialMediaInterface, socialMedia } from './social-media'
import { ProjectInterface, projects } from './project'
import { ExperienceInterface, experiences } from './experience'
import { CertificationInterface, certifications } from './certification'

interface DataProps {
  stack: Array<StackInterface>
  socialMedia: Array<SocialMediaInterface>
  softSkills: Array<string>
  projects: Array<ProjectInterface>
  experiences: Array<ExperienceInterface>
  certifications: Array<CertificationInterface>
}

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem-solving',
  'Creativity',
  'Open-mindedness',
  'Emotional intelligence',
  'Attention to detail',
  'Empathy',
]

const DATA: DataProps = {
  stack,
  socialMedia,
  softSkills,
  projects,
  experiences,
  certifications,
}

export default DATA
