import Button from '../navigation/navbar/Button'
import styles from './career-form.module.css'

export function CareerForm() {
  return (
    <div className={styles.form}>
      <form className={'flex flex-col mx-8 sm:mx-32 md:mx-48 lg:mx-64 xl:mx-96'}>
        <label for="name">
          <p>Nome</p>
        </label>
        <input id="name" name="name" type="text" required />
        <label for="email">
          <p>E-mail</p>
        </label>
        <input id="email" name="email" type="email" required />
        <label for="portfolio">
          <p>Link para portfólio:</p>
        </label>
        <input id="portfolio" name="portfolio" type="url" required />
        <label for="message">
          <p>Por que você quer fazer parte da Jojos?</p>
        </label>
        <textarea id="message" name="message" required />
        <Button text="Enviar formulário" type="submit"></Button>
      </form>
    </div>
  )
}
