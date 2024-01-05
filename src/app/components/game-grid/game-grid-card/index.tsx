import Image, { StaticImageData } from 'next/image'

interface Props {
  imageSource: StaticImageData
}

const GameGridCard = ({ imageSource }: Props) => {
  return (
    <div className={'sm:flex-1 h-48 lg:h-72'}>
      <Image
        className={'w-full h-full'}
        src={imageSource}
        style={{ objectFit: 'cover' }}
        alt=""
      />
    </div>
  )
}

export default GameGridCard
