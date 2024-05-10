import React from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { SectionType, type Languages, type FromLanguage, type Language } from '../types/types.d'

type Props =
  | {
      type: SectionType.From
      value: FromLanguage
      onChange: (language: FromLanguage) => void
      languageOptions: Languages[]
    }
  | {
      type: SectionType.To
      value: Language
      onChange: (language: Language) => void
      languageOptions: Languages[]
    }

export function LanguageSelector({ onChange, type, value, languageOptions }: Props): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    const selectedLanguageCode = event.target.value
    type === SectionType.From
      ? onChange(selectedLanguageCode as FromLanguage)
      : onChange(selectedLanguageCode as Language)
  }

  const languageItems = languageOptions.map(language => (
    <SelectItem
      key={language.code}
      value={language.code}>
      {language.name}
    </SelectItem>
  ))

  return (
    <Select
      onChange={handleChange}
      placeholder='Selecciona el idioma'
      selectedKeys={[value]}
      value={value}>
      {languageItems}
    </Select>
  )
}
