import AnimatedComponent from '../molecules/AnimatedComponent'
import { blogPosts } from '@/data/blog'
import { PAGE_CONTAINER } from '@/utils/classNames'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export default function BlogSection() {
  const posts = blogPosts.slice(0, 3)

  return (
    <section
      id="blog"
      className="w-full bg-[#F7F4EE] py-24 sm:py-32 scroll-mt-20"
    >
      <div className={PAGE_CONTAINER}>
        {/* Header */}
        <AnimatedComponent HTMLtag="div" className="mb-12 sm:mb-14">
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#E8542A] mb-3">
            Writing
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#0C0A08] leading-tight">
            Notes on engineering.
          </h2>
        </AnimatedComponent>

        {/* Post rows */}
        <div className="border-t border-[#0C0A08]/10">
          {posts.map((post, idx) => {
            const inner = (
              <div className="group flex items-start justify-between gap-4 py-6 sm:py-7 border-b border-[#0C0A08]/10">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-mono text-[#B5B0AB]">
                      {formatDate(post.date)}
                    </span>
                    {!post.link && (
                      <span className="text-[10px] tracking-widest uppercase text-[#B5B0AB] border border-[#0C0A08]/10 px-2 py-0.5">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#0C0A08] leading-snug mb-2 group-hover:text-[#E8542A] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#6B6560] max-w-xl">
                    {post.excerpt}
                  </p>
                </div>
                {post.link && (
                  <FaArrowUpRightFromSquare
                    size={14}
                    className="mt-1 shrink-0 text-[#B5B0AB] group-hover:text-[#E8542A] transition-colors duration-200"
                    aria-hidden
                  />
                )}
              </div>
            )

            return (
              <AnimatedComponent key={post.title} HTMLtag="div" delay={idx * 0.07}>
                {post.link ? (
                  <a href={post.link} target="_blank" rel="noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </AnimatedComponent>
            )
          })}
        </div>
      </div>
    </section>
  )
}
