'use client'
import { CareerForm } from '../components/career-form'

export default function Career() {
  return (
    <div className="pt-5">
      <h1
        className={'text-center text-xl mx-6 sm:text-2xl lg:text-4xl mb-4 lg:mb-12'}
      >
        Formulário de Vaga
      </h1>
      <CareerForm></CareerForm>
    </div>
  )
}
