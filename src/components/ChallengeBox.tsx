import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  return (
    <div className={styles.ChallengeBoxContainer}>
      <div className={styles.challengeBoxNotActive}>
        <strong>Finaliza um ciclo para receber desafios</strong>
        <p>
          <img src="icons/level-up.svg" alt="Leve up" />
          Avance de level completando os desafios.
        </p>
      </div>
    </div>
  )
}
