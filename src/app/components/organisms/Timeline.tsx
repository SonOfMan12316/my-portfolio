import { TimelineDateProps } from '../atoms/TimelineDate'
import { mergeClassNames } from '@/utils/classNames'
import AnimatedComponent from '../molecules/AnimatedComponent'

interface ImageTimeline {
  src: string
  alt: string
}

export interface TimelineItem {
  component: React.ReactNode
  date: TimelineDateProps
  image: ImageTimeline
}

interface TimelineProps {
  items: Array<TimelineItem>
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative w-full">
      <div className="hidden sm:block absolute left-1/2 top-0 h-full border-l-2 border-gray-300 -translate-x-1/2 z-0" />

      <div className="flex flex-col gap-20 relative z-10">
        {items.map(({ component }, index) => {
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row w-full sm:items-start sm:justify-between group"
            >
              <AnimatedComponent
                HTMLtag="div"
                className={mergeClassNames(
                  'hidden sm:block absolute left-1/2 -translate-x-1/2',
                  'w-6 h-6 mt-4',
                  'bg-gray-200 rounded-full z-10',
                  'group-hover:drop-shadow-[0_0_4px_#ffffff] transition-all duration-200'
                )}
              />
              <>
                <AnimatedComponent
                  HTMLtag="div"
                  className="order-2 sm:order-1 w-full sm:w-1/2 sm:pr-4 flex flex-col sm:flex-row justify-end"
                >
                  {component}
                </AnimatedComponent>
              </>
            </div>
          )
        })}
      </div>
    </div>
  )
}
