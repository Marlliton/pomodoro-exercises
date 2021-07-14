import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'


import { ChallengeProvider } from '../contexts/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
