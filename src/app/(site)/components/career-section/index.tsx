import CareerCard from '../career-card'

const cardsData = [
  {
    title: 'Desenvolvedor C++ Pleno',
    tags: ['DEV', 'Remoto'],
  },
  {
    title: 'Engenheiro de Software',
    tags: ['Engenheiro', 'Remoto'],
  },
  {
    title: 'Artista Técnico',
    tags: ['Arte', 'Remoto'],
  },
  {
    title: 'Representante Comercial',
    tags: ['Comercial', 'Presencial'],
  },
  {
    title: 'Desenvolvedor C++ Júnior',
    tags: ['DEV', 'Remoto'],
  },
]

const CareerSection = () => {
  return (
    <div className={'my-16 lg:my-28'}>
      <h1 className={'text-center text-xl sm:text-3xl md:text-4xl mb-4'}>
        Carreira
      </h1>
      <div
        className={
          'flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5'
        }
      >
        {cardsData.map((data) => {
          return (
            <CareerCard
              key={cardsData.indexOf(data)}
              title={data.title}
              tagsData={data.tags}
            ></CareerCard>
          )
        })}
      </div>
    </div>
  )
}

export default CareerSection
