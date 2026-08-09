import { experiences, ExperienceInterface } from '@/data/experience'
import AnimatedComponent from '../molecules/AnimatedComponent'
import { mergeClassNames, PAGE_CONTAINER } from '@/utils/classNames'

function formatDateRange(start: string, end: string) {
  const parse = (s: string) => {
    const [d, m, y] = s.split('/')
    return new Date(Number(y), Number(m) - 1, Number(d))
  }

  const fmt = (d: Date) =>
    d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

  const startDate = parse(start)
  const endLabel = end ? fmt(parse(end)) : 'Present'
  return { start: fmt(startDate), end: endLabel }
}

function typeLabel(type: ExperienceInterface['type']) {
  const map: Record<ExperienceInterface['type'], string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    freelancer: 'Freelance',
    intern: 'Internship',
    volunteer: 'Volunteer',
    contract: 'Contract',
  }
  return map[type] ?? type
}

export default function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="w-full bg-[#F7F4EE] py-24 sm:py-32 scroll-mt-20"
    >
      <div className={PAGE_CONTAINER}>
        {/* Section header */}
        <AnimatedComponent HTMLtag="div" className="mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#E8542A] mb-3">
            Experience
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#0C0A08] leading-tight">
            Where I&apos;ve worked.
          </h2>
        </AnimatedComponent>

        {/* Experience rows */}
        <div className="border-t border-[#0C0A08]/10">
          {experiences.map((exp, idx) => {
            const { start, end } = formatDateRange(exp.start, exp.end)
            return (
              <AnimatedComponent
                key={idx}
                HTMLtag="article"
                delay={idx * 0.08}
                className="border-b border-[#0C0A08]/10 py-8 sm:py-10"
              >
                {/* Mobile layout: stacked */}
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
                  {/* Left column — date + role meta */}
                  <div className="sm:w-56 lg:w-64 shrink-0">
                    <p className="text-xs text-[#B5B0AB] font-mono tabular-nums mb-1">
                      {start} — {end}
                    </p>
                    <p className="font-serif text-lg sm:text-xl font-medium text-[#0C0A08] leading-tight">
                      {exp.name}
                    </p>
                    <p className="mt-1 text-sm text-[#6B6560]">{exp.role}</p>
                    {exp.location && (
                      <p className="mt-0.5 text-xs text-[#B5B0AB]">{exp.location}</p>
                    )}
                    <span className="mt-2 inline-block text-[10px] tracking-widest uppercase text-[#B5B0AB] border border-[#0C0A08]/10 px-2 py-0.5">
                      {typeLabel(exp.type)}
                    </span>
                  </div>

                  {/* Right column — achievements */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base leading-7 text-[#6B6560] mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-6 text-[#0C0A08]/75">
                          <span
                            className="mt-2 shrink-0 h-px w-4 bg-[#E8542A]"
                            aria-hidden
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedComponent>
            )
          })}
        </div>
      </div>
    </section>
  )
}
