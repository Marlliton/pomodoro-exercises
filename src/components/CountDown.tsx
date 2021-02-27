import { join } from 'path'
import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountDown,
    startCountDown
  } = useContext(CountdownContext)

  const minutesLeftRight = String(minutes).padStart(2, '0').split('')
  const secondsLeftRight = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minutesLeftRight[0]}</span>
          <span>{minutesLeftRight[1]}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeftRight[0]}</span>
          <span>{secondsLeftRight[1]}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countDownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountDown}
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              type="button"
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCountDown}
              className={styles.countDownButton}
              type="button"
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}
