import Image from 'next/image'
import marioImage from '../../../../public/images/mario.png'
import pacmanImage from '../../../../public/images/pacman.png'
import spaceInvadersImage from '../../../../public/images/space-invaders.png'
import tetrisImage from '../../../../public/images/tetris.png'
import GameGridCard from './game-grid-card'

const GameGrid = () => {
  return (
    <>
      <div className={'sm:flex-row mb-5 h-48 lg:h-[31.2rem]'}>
        <Image
          src={pacmanImage}
          className={'w-full h-full'}
          style={{ objectFit: 'cover' }}
          alt=""
        />
      </div>
      <div className={'flex flex-col sm:flex-row gap-5'}>
        <GameGridCard imageSource={spaceInvadersImage} />
        <GameGridCard imageSource={tetrisImage} />
        <GameGridCard imageSource={marioImage} />
      </div>
    </>
  )
}

export default GameGrid
