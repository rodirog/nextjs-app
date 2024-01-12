import Link from 'next/link'
import CareerCardTag from './career-card-tag'

interface Props {
  title: string
  tagsData: []
}

const CareerCard = ({ title, tagsData }: Props) => {
  return (
    <Link href="/career">
      <div
        className={
          'flex flex-col border sm:border-2 border-career-card-color p-2.5 sm:p-4 md:p-5 lg:p-6 gap-1.5 sm:gap-2 lg:gap-3.5'
        }
      >
        <h2 className={'text-sm sm:text-xl lg:text-2xl sm:mt-[-8px]'}>
          {title}
        </h2>
        <div className={'flex gap-2 sm:gap-3 lg:gap-4'}>
          {tagsData.map((tag) => {
            return <CareerCardTag key={tag} tag={tag}></CareerCardTag>
          })}
        </div>
      </div>
    </Link>
  )
}

export default CareerCard
