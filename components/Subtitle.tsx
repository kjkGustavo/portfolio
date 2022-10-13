import { ReactNode } from 'react'

type SubtitleProps = {
  children: ReactNode
}

const Subtitle = ({ children }: SubtitleProps) => (
  <h2
    className="font-medium after:block after:w-11 after:h-[1px] after:bg-white after:relative after:mt-1.5 text-xl lg:text-2xl mb-5 fade-in"
    style={{ animationDelay: '.8s' }}
  >
    {children}
  </h2>
)

export default Subtitle
