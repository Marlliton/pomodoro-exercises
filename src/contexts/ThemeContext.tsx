import { useEffect, useState, createContext, ReactNode, } from 'react'
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'
import cookies from 'js-cookie'
import { lightTheme } from '../styles/styles'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({})