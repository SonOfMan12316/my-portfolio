import AnimatedComponent from '../molecules/AnimatedComponent'
import { mergeClassNames, PAGE_GUTTER } from '@/utils/classNames'

export default function AboutSection() {
  return (
    <section
      id="about"
      className={mergeClassNames('w-full bg-[#F7F4EE] py-24 sm:py-32 scroll-mt-20', PAGE_GUTTER)}
    >
      <div className="w-full max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          {/* Left column — decorative */}
          <AnimatedComponent HTMLtag="div" className="lg:pt-2">
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#E8542A] mb-6">
              About
            </p>
            <div aria-hidden className="select-none">
              <p className="font-serif text-[clamp(5rem,12vw,8rem)] font-light text-[#0C0A08]/6 leading-none">
                EC
              </p>
            </div>
            <div className="mt-8 hidden lg:block">
              <div className="space-y-3 text-xs text-[#B5B0AB] font-mono">
                <p>5+ years building</p>
                <p>production systems</p>
                <div className="h-px w-8 bg-[#E8542A] mt-4" />
              </div>
            </div>
          </AnimatedComponent>

          {/* Right column — copy */}
          <div className="space-y-6">
            <AnimatedComponent HTMLtag="h2" className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#0C0A08] leading-tight max-w-xl">
              I didn&apos;t start as a full-stack engineer. I started building interfaces.
            </AnimatedComponent>

            <AnimatedComponent HTMLtag="p" delay={0.1} className="text-sm sm:text-base leading-7 text-[#6B6560] max-w-2xl">
              Then I got obsessed with the API calls that fed them, so I wrote the APIs
              myself. Then the database schemas. Then authentication. Then shipped a
              mobile app. Five years in, I&apos;ve stopped thinking in terms of layers
              and started thinking in terms of products.
            </AnimatedComponent>

            <AnimatedComponent HTMLtag="p" delay={0.15} className="text-sm sm:text-base leading-7 text-[#6B6560] max-w-2xl">
              I&apos;ve built systems that serve thousands of users — from a family
              management app running on iOS and Android, to a school platform with
              an embedded AI tutor. I&apos;ve led small frontend teams, owned API
              infrastructure, and done the less glamorous work that keeps production
              systems stable and predictable.
            </AnimatedComponent>

            <AnimatedComponent HTMLtag="p" delay={0.2} className="text-sm sm:text-base leading-7 text-[#6B6560] max-w-2xl">
              I care about code that other engineers can reason about, documentation
              that actually helps, and shipping things that do what they say they do.
              If that&apos;s the kind of engineer you&apos;re looking for, let&apos;s talk.
            </AnimatedComponent>

            <AnimatedComponent HTMLtag="div" delay={0.25} className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:emanyocharles40@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-[#0C0A08] border-b border-[#E8542A] pb-0.5 hover:text-[#E8542A] transition-colors duration-200"
              >
                emanyocharles40@gmail.com
                <span aria-hidden>↗</span>
              </a>
              <a
                href="/files/Charles Emanyo CV.pdf"
                download
                className="inline-flex items-center gap-2 text-sm text-[#6B6560] border-b border-[#0C0A08]/20 pb-0.5 hover:text-[#0C0A08] hover:border-[#0C0A08]/50 transition-colors duration-200"
              >
                Download CV
                <span aria-hidden>↓</span>
              </a>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </section>
  )
}
