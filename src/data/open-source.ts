export interface OpenSourceInterface {
  name: string
  description: string
  tags: Array<string>
  link: string
  linkLabel?: string
}

/**
 * Repos and packages published for others to use or learn from.
 * Seeded from the public repos already referenced in `project.ts` — edit freely.
 */
export const openSource: Array<OpenSourceInterface> = [
  {
    name: 'Bookmark Manager',
    description:
      'Save, tag, search, and filter bookmarks from any device, with a backend that keeps everything in sync.',
    tags: ['TypeScript', 'React', 'Full Stack'],
    link: 'https://github.com/SonOfMan12316/Bookmark-Manager',
    linkLabel: 'View Source',
  },
  {
    name: 'Finance Tracker',
    description:
      'Personal finance tracking with budgets, categorised spending, and a dashboard that makes the month legible at a glance.',
    tags: ['TypeScript', 'React', 'Full Stack'],
    link: 'https://github.com/SonOfMan12316/Finance-Tracker',
    linkLabel: 'View Source',
  },
  {
    name: 'Shopcart',
    description:
      'A commerce storefront wired up with Sanity for content, Stripe for checkout, and Clerk for auth.',
    tags: ['Next.js', 'TypeScript', 'Sanity', 'Stripe'],
    link: 'https://github.com/SonOfMan12316/Shopcart',
    linkLabel: 'View Source',
  },
]
