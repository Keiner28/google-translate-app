import React from 'react'
import { Textarea } from '@nextui-org/input'
import { SectionType } from '../types/types.d'

interface TextAreaProps {
  autoFocus?: boolean
  loading?: boolean
  onChange: (value: string) => void
  type: SectionType
  value: string
}

const getPlaceHolder = ({ type, loading }: { type: SectionType; loading?: boolean }): string => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading) return 'Cargando...'
  return 'Traducción'
}

export function TextArea({ type, loading, value, onChange }: TextAreaProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }

  return (
    <Textarea
      // autoFocus={type === SectionType.From}
      className='border-r-0'
      disabled={type === SectionType.To}
      minRows={14}
      onChange={handleChange}
      placeholder={getPlaceHolder({ type, loading })}
      style={{ fontSize: '1.5rem', fontFamily: 'inherit', marginBottom: '64px' }}
      value={value}
    />
  )
}
