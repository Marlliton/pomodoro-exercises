import Styles from '../styles/components/Profile.module.css'

export default function Profile() {
  return (
    <div className={Styles.profileContainer}>
      <img src="https://github.com/Marlliton.png" alt="Imagem de perfil" />
      <div>
        <strong>Marlliton Souza</strong>
        <p>
          <img src="icons/level.svg" />
          Level 1
        </p>
      </div>
    </div>
  )
}
