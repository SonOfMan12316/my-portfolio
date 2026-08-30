import PageTemplate from '@/templates/PageTemplate'
import BackgroundBlur from '@/app/components/molecules/BackgroundBlur'
import BackToTopButton from '@/app/components/organisms/BackToTopButton'
import ScrollProgress from '@/app/components/organisms/ScrollProgress'
import CustomCursor from '@/app/components/organisms/CustomCursor'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageTemplate>
      {children}
      <BackgroundBlur />
      <ScrollProgress />
      <CustomCursor />
      <BackToTopButton />
    </PageTemplate>
  )
}
