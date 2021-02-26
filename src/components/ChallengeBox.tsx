import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext)

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              onClick={resetChallenge}
              type="button"
              className={styles.ChallengeFailedButton}
            >
              Falhei
            </button>
            <button type="button" className={styles.ChallengeSucceedButton}>
              Terminei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Finaliza um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Leve up" />
            Avance de level completando os desafios.
          </p>
        </div>
      )}
    </div>
  )
}
