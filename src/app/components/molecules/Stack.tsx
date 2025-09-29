import { mergeClassNames } from '@/utils/classNames'
import DATA from '@/data'
import AnimatedComponent from './AnimatedComponent'
import Image from 'next/image'

interface StackProps {
  className?: string
}

export default function Stack({ className }: StackProps) {
  const items = DATA.stack

  return (
    <AnimatedComponent
      HTMLtag="div"
      className={mergeClassNames(
        'flex flex-col gap-4 items-center sm:items-start ',
        className
      )}
    >
      <span className="text-base">My stack</span>

      <AnimatedComponent HTMLtag="div" className="flex gap-4">
        {items.map(({ name }, index) => (
          <Image
            key={index}
            src={`/cover/${name}.svg`}
            alt={`${name} icon`}
            width={40}
            height={40}
            priority
          />
        ))}
      </AnimatedComponent>
    </AnimatedComponent>
  )
}
