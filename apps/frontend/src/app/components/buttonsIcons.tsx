import React from 'react'
import { Button } from '@nextui-org/react'

interface ButtonIconProps {
  handleClick: () => void
  children: React.ReactNode
  isDisabled?: boolean
}

function ButtonIcon({ handleClick, children, isDisabled }: ButtonIconProps): JSX.Element {
  return (
    <Button
      className='bottom-14 left-3'
      color='default'
      isDisabled={isDisabled}
      isIconOnly
      onClick={handleClick}>
      {children}
    </Button>
  )
}

function InterchangeButton({ handleClick, children, isDisabled }: ButtonIconProps): JSX.Element {
  return (
    <Button
      aria-label='ArrowsIcon'
      color='default'
      isDisabled={isDisabled}
      isIconOnly
      onClick={handleClick}>
      {children}
    </Button>
  )
}

export { ButtonIcon, InterchangeButton }
