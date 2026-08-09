import PageLayout from '@/layouts/PageLayout'
import CoverSection from '../app/components/organisms/CoverSection'
import ProjectsSection from '@/app/components/organisms/ProjectsSection'
import ExperiencesSection from '@/app/components/organisms/ExperiencesSection'
import BlogSection from '@/app/components/organisms/BlogSection'
import ContactSection from '@/app/components/organisms/ContactSection'

export default function HomeTemplate() {
  return (
    <PageLayout>
      <CoverSection />
      <ProjectsSection />
      <ExperiencesSection />
      <BlogSection />
      <ContactSection />
    </PageLayout>
  )
}
