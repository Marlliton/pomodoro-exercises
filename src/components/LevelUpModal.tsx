import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { closeLevelUpModal } = useContext(ChallengeContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>3</header>
        <strong>Parabéns</strong>
        <p> você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  )
}
