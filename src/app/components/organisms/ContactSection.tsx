import AnimatedComponent from '../molecules/AnimatedComponent'
import { PAGE_CONTAINER } from '@/utils/classNames'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/charles-emanyo-a56457233' },
  { label: 'GitHub', href: 'https://github.com/SonOfMan12316' },
  { label: 'X / Twitter', href: 'https://x.com/mancyDev' },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-[#F7F4EE] py-10 scroll-mt-20"
    >
      <div className={PAGE_CONTAINER}>
        {/* Large heading */}
        <AnimatedComponent HTMLtag="div" className="mb-14 sm:mb-18">
          <h2
            className="font-serif font-bold text-[#0C0A08] leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(3rem,8vw,6.5rem)' }}
          >
            Let&apos;s make something<br />worth shipping.
          </h2>
        </AnimatedComponent>

        {/* EMAIL + SOCIALS two-column */}
        <AnimatedComponent HTMLtag="div" delay={0.1} className="flex flex-col sm:flex-row gap-10 sm:gap-24">
          {/* Email */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6B6560] mb-4">
              Email
            </p>
            <a
              href="mailto:emanyocharles40@gmail.com"
              className="text-base sm:text-lg text-[#0C0A08] underline underline-offset-4 decoration-[#0C0A08]/30 hover:decoration-[#0C0A08] transition-all duration-200"
            >
              emanyocharles40@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6B6560] mb-4">
              Socials
            </p>
            <ul className="space-y-2">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-base sm:text-lg text-[#0C0A08] hover:text-[#6B6560] transition-colors duration-200"
                  >
                    {label}
                    <span aria-hidden className="text-sm text-[#0C0A08]/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 inline-block">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedComponent>
      </div>
    </section>
  )
}
