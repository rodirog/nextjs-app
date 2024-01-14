import Image from 'next/image'
import styles from './career-modal.module.css'
import checkmarkImage from '../../../../../public/images/modal-checkmark.svg'

const CareerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Formulário enviado com sucesso</h2>
        <Image
          className={styles.image}
          src={checkmarkImage}
          alt={'A green checkmark'}
        ></Image>
        <button className={styles.button} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  )
}

export default CareerModal
