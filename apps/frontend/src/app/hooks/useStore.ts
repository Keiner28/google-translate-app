import { useReducer } from 'react'
import { type FromLanguage, type Action, type TranslationState, type Language } from '../types/types.d'
import { AUTO_LANGUAGE } from '../lib/constants'

const initialState: TranslationState = {
  fromLanguage: 'auto',
  toLanguage: 'en-US',
  fromText: '',
  result: '',
  loading: false
}

function reducer(state: TranslationState, action: Action): TranslationState {
  const { type } = action
  if (type === 'INTERCHANGE_LANGUAGES') {
    if (state.fromLanguage === AUTO_LANGUAGE || state.fromLanguage === state.toLanguage.split('-')[0]) return state

    const loading = state.fromText !== ''
    let newFromLanguage = state.toLanguage as FromLanguage
    let newToLanguage = state.fromLanguage as Language

    // Validar si fromLanguage está en toLanguage
    if (!state.toLanguage.includes(state.fromLanguage)) {
      // Si no está, agregar una variante por defecto
      if (state.fromLanguage === 'en') {
        newToLanguage = 'en-US'
      } else if (state.fromLanguage === 'pt') {
        newToLanguage = 'pt-PT'
      }
    }

    // Validar si toLanguage está en fromLanguage
    if (!state.fromLanguage.includes(state.toLanguage.split('-')[0])) {
      // Si no está, agregar una variante por defecto
      if (state.toLanguage.split('-')[0] === 'en') {
        newFromLanguage = 'en'
      } else if (state.toLanguage.split('-')[0] === 'pt') {
        newFromLanguage = 'pt'
      }
    }

    return {
      ...state,
      loading,
      result: '',
      fromLanguage: newFromLanguage,
      toLanguage: newToLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state
    const loading = state.fromText !== ''
    return {
      ...state,
      fromLanguage: action.payload,
      loading,
      result: ''
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    if (state.toLanguage === action.payload) return state
    const loading = state.fromText !== ''
    return {
      ...state,
      toLanguage: action.payload,
      result: '',
      loading
    }
  }

  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== ''
    return {
      ...state,
      loading,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

export function useStore() {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = (): void => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage): void => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language): void => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string): void => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string): void => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
