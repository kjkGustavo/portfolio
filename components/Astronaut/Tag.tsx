import clsx from 'clsx'

export type ProjectProps = {
  tech:
    | 'Docker'
    | 'ReactJS'
    | 'Git'
    | 'JavaScript'
    | 'TypeScript'
    | 'Firebase'
    | 'NodeJS'
    | 'AWS-EC2'
    | 'AWS-Lambda'
    | 'ReactNative'
    | 'NestJS'
    | 'NextJS'
}

const GravityTag = ({ tech }: ProjectProps) => (
  <span
    className={clsx(
      `font-bold text-base leading-4 absolute text-white rounded-md px-2.5 py-1.5 ${tech.toLowerCase()} `
    )}
  >
    {tech.replace('-', ' ')}
  </span>
)

export default GravityTag
