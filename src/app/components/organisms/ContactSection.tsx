import SectionTemplate from '@/templates/SectionTemplate'
import Footer from './Footer'
import HighlightText from '@/app/components/atoms/HighlightText'
import { mergeClassNames } from '@/utils/classNames'
import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'

export default function CTASection() {
  return (
    <>
      <SectionTemplate
        id="contact"
        className="flex flex-col justify-between min-h-0"
      >
        <div
          className={mergeClassNames(
            'flex flex-col items-center justify-center w-full z-30 mb-6 sm:mb-12'
          )}
        >
          <Title className="text-center">You do like my work?</Title>
          <Subtitle className="pt-4 text-center">
            Have a <HighlightText>project in mind</HighlightText>, a{' '}
            <HighlightText>question</HighlightText>, or just want to{' '}
            <HighlightText>say hello</HighlightText>?<br />
            Feel free to reach out, I{`'`}m always open to connect!
          </Subtitle>
        </div>
        <Footer />
      </SectionTemplate>
    </>
  )
}
