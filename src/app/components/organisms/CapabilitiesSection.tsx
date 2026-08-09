import AnimatedComponent from '../molecules/AnimatedComponent'
import { mergeClassNames, PAGE_CONTAINER } from '@/utils/classNames'

const capabilities = [
  {
    title: 'Frontend Engineering',
    description:
      'Building polished, scalable interfaces and design systems. Component architecture, state management, and performance that holds up in production.',
    stack: ['React', 'Vue', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend Engineering',
    description:
      'Designing APIs and business logic that teams can depend on. Auth, queuing, caching, documentation, and the infrastructure behind them.',
    stack: ['NestJS', 'Express', 'Node.js', 'MongoDB', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'Mobile Engineering',
    description:
      'Cross-platform applications for iOS and Android built with React Native. From product architecture to App Store delivery.',
    stack: ['React Native', 'Expo', 'Firebase'],
  },
  {
    title: 'Product Engineering',
    description:
      'Taking a product from idea to production. I&apos;ve built full-stack systems solo — backend, frontend, and mobile — and owned the delivery end to end.',
    stack: ['System design', 'API contracts', 'Solo builds', 'Team leads'],
  },
  {
    title: 'Performance & Reliability',
    description:
      'Reducing load times, improving API response speeds, migrating infrastructure with zero downtime, and writing code that other engineers can reason about.',
    stack: ['Caching', 'Code splitting', 'Lazy loading', 'Swagger docs'],
  },
  {
    title: 'Developer Experience',
    description:
      'Writing clear API documentation, leading code reviews, and onboarding engineers. Good DX is a form of product thinking.',
    stack: ['Code reviews', 'Pair programming', 'Documentation', 'Agile'],
  },
]

export default function CapabilitiesSection() {
  return (
    <section
      className="w-full bg-[#ECEAE3] py-24 sm:py-32"
    >
      <div className={PAGE_CONTAINER}>
        {/* Section header */}
        <AnimatedComponent HTMLtag="div" className="mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#E8542A] mb-3">
            Capabilities
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#0C0A08] leading-tight max-w-xl">
            What I build and how I think.
          </h2>
        </AnimatedComponent>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0C0A08]/8">
          {capabilities.map((cap, idx) => (
            <AnimatedComponent
              key={cap.title}
              HTMLtag="div"
              delay={idx * 0.06}
              className="bg-[#ECEAE3] p-7 sm:p-8"
            >
              <h3 className="font-serif text-lg sm:text-xl font-medium text-[#0C0A08] leading-snug mb-3">
                {cap.title}
              </h3>
              <p
                className="text-sm leading-6 text-[#6B6560] mb-5"
                dangerouslySetInnerHTML={{ __html: cap.description }}
              />
              <div className="flex flex-wrap gap-2">
                {cap.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] tracking-wide text-[#0C0A08]/50 border border-[#0C0A08]/12 px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  )
}
