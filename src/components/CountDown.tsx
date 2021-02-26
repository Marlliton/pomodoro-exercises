import { join } from 'path'
import { useContext, useEffect, useState } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CountDown.module.css'

let countDownTimeOut: NodeJS.Timeout

export function CountDown() {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const minutesLeftRight = String(minutes).padStart(2, '0').split('')
  const secondsLeftRight = String(seconds).padStart(2, '0').split('')

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(countDownTimeOut)
    setIsActive(false)
    setTime(0.05 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

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
