import aboutImage from '../../../../../public/images/about-image.png'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div id={'about'} className={'mt-16 lg:mt-28'}>
      <h1 className={'text-center text-xl sm:text-3xl md:text-4xl mb-4'}>
        Sobre nós
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row-reverse lg:gap-12">
        <Image
          className={
            'mx-auto w-80 lg:h-[30rem] xl:w-auto xl:h-auto object-cover'
          }
          src={aboutImage}
          alt="Photo of a modern arcade place with vintage arcades. String lights hang in the ceiling."
        ></Image>
        <div className={'flex flex-col gap-3'}>
          <p className={'text-sm sm:text-base lg:text-xl indent-9'}>
            Bem-vindo à Jojos, uma empresa de jogos retrô brasileira! Somos uma
            equipe apaixonada por games clássicos e estamos comprometidos em
            trazer de volta a magia desses títulos que marcaram época. Com
            gráficos pixelizados, trilhas sonoras envolventes e mecânicas
            desafiadoras, nossos jogos são verdadeiras homenagens aos consoles e
            computadores que encantaram o passado. Junte-se a nós e embarque em
            uma viagem nostálgica repleta de aventuras.
          </p>
          <p className={'text-sm sm:text-base lg:text-xl indent-9'}>
            Acreditamos que os jogos jogos retrô têm o poder de unir gerações,
            despertar memórias afetivas proporcionar momentos de pura diversão.
            Nossa missão é manter viva a essência dos jogos clássicos, levando
            você a uma jornada inesquecível pelos mundos pixelizados cheios de
            magia. Faça parte dessa nova era retrô e mergulhe em experiências
            que continuam a encantar corações até hoje.
          </p>
          <p className={'text-sm sm:text-base lg:text-xl indent-9'}>
            Jojos, onde a nostalgia encontra a diversão! Com uma equipe
            apaixonada por games, estamos comprometidos em trazer de volta a
            magia dos jogos clássicos que marcaram gerações inteiras. Explore
            nossos jogos e embarque em uma viagem nostálgica repleta de
            aventuras e desafios. Junte-se a nós e compartilhe da nossa paixão
            pelos jogos retrô!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
