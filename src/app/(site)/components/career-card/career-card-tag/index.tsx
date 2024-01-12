import Link from 'next/link'
import { TagsArrayInput } from 'sanity'

interface Props {
  tag: string
}

const CareerCardTag = ({ tag }: Props) => {
  return (
    <div className={'border border-career-card-color rounded py-0.5 px-2 md:py-1.5 md:px-3'}>
      <p className={'text-xs sm:text-sm lg:text-base'}>{tag}</p>
    </div>
  )
}

export default CareerCardTag
