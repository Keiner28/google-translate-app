import { type TargetLanguageCode, type SourceLanguageCode } from 'deepl-node'
import { type AUTO_LANGUAGE } from '../lib/constants'

export type Language = TargetLanguageCode
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = SourceLanguageCode | AutoLanguage

export interface TranslationState {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'SET_FROM_LANGUAGE'; payload: FromLanguage }
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_TO_LANGUAGE'; payload: Language }
  | { type: 'SET_FROM_TEXT'; payload: string }
  | { type: 'SET_RESULT'; payload: string }

export enum SectionType {
  From = 'from',
  To = 'to'
}

export interface Languages {
  name: string
  code: string
}
