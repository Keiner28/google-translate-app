import { Switch } from '@nextui-org/react'
import React, { type ReactNode } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from './icons'

export function Switcher(): JSX.Element {
  // const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme() as {
    theme: string
    setTheme: (theme: string) => void
  }

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  const handleSwitch = (isSelected: boolean, classname: string): ReactNode => {
    if (isSelected) {
      setTheme('light')
      return <SunIcon className={classname} />
    }
    setTheme('dark')
    return <MoonIcon className={classname} />
  }

  // if (!mounted) return null
  return (
    <Switch
      color='primary'
      defaultSelected={theme === 'light'}
      size='lg'
      thumbIcon={({ isSelected, className }) => handleSwitch(isSelected, className)}
    />
  )
}
