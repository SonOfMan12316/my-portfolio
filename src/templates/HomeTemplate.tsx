import PageLayout from '@/layouts/PageLayout'
import CoverSection from '../app/components/organisms/CoverSection'
import ProjectsSection from '@/app/components/organisms/ProjectsSection'
import OpenSourceSection from '@/app/components/organisms/OpenSourceSection'
import MobileAppsSection from '@/app/components/organisms/MobileAppsSection'
import ExperiencesSection from '@/app/components/organisms/ExperiencesSection'
import PressSection from '@/app/components/organisms/PressSection'
import BlogSection from '@/app/components/organisms/BlogSection'
import ContactSection from '@/app/components/organisms/ContactSection'

export default function HomeTemplate() {
  return (
    <PageLayout>
      <CoverSection />
      <ProjectsSection />
      <OpenSourceSection />
      <MobileAppsSection />
      <ExperiencesSection />
      <PressSection />
      <BlogSection />
      <ContactSection />
    </PageLayout>
  )
}
