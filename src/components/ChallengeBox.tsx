import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengeContext
  )

  const {resetCountDown} = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountDown()
  }
  
  function handleChallengeFailed() {
    resetChallenge()
    resetCountDown()
  }

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
              onClick={handleChallengeFailed}
              type="button"
              className={styles.ChallengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.ChallengeSucceedButton}
              onClick={handleChallengeSucceeded}
            >
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
