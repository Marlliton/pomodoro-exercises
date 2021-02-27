import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import Styles from '../styles/components/Profile.module.css'

export default function Profile() {
  const { level } = useContext(ChallengeContext)

  return (
    <div className={Styles.profileContainer}>
      <img src="https://github.com/Marlliton.png" alt="Imagem de perfil" />
      <div>
        <strong>Marlliton Souza</strong>
        <p>
          <img src="icons/level.svg" />
          level {level}
        </p>
      </div>
    </div>
  )
}
