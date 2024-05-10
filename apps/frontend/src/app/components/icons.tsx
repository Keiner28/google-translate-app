import React, { type FC, type SVGProps } from 'react'
import { useTheme } from 'next-themes'

type SvgProps = SVGProps<SVGSVGElement>

export const ArrowsIcon: FC<SvgProps> = () => {
  const { theme } = useTheme()

  const fill = theme === 'dark' ? 'white' : 'black'
  return (
    <svg
      fill={fill}
      focusable='false'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z' />
    </svg>
  )
}

export const ClipboardIcon: FC<SvgProps> = () => {
  const { theme } = useTheme()

  const fill = theme === 'dark' ? 'white' : 'black'
  return (
    <svg
      enableBackground='new 0 0 24 24'
      fill={fill}
      focusable='false'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'>
      <g>
        <rect
          fill='none'
          height='24'
          width='24'
        />
      </g>
      <g>
        <path d='M16,20H5V6H3v14c0,1.1,0.9,2,2,2h11V20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9 C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z' />
      </g>
    </svg>
  )
}

export const MicrophoneIcon: FC<SvgProps> = () => {
  const { theme } = useTheme()

  const fill = theme === 'dark' ? 'white' : 'black'
  return (
    <svg
      fill={fill}
      focusable='false'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z' />
    </svg>
  )
}

export const SpeakerIcon: FC<SvgProps> = () => {
  const { theme } = useTheme()

  const fill = theme === 'dark' ? 'white' : 'black'
  return (
    <svg
      fill={fill}
      focusable='false'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' />
    </svg>
  )
}

export const StopIcon: FC<SvgProps> = () => {
  const { theme } = useTheme()

  const fill = theme === 'dark' ? 'white' : 'black'
  return (
    <svg
      fill={fill}
      focusable='false'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M6 6h12v12H6z' />
    </svg>
  )
}

export const SunIcon: FC<SvgProps> = props => (
  <svg
    aria-hidden='true'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}>
    <g fill='currentColor'>
      <path d='M19 12a7 7 0 11-7-7 7 7 0 017 7z' />
      <path d='M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z' />
    </g>
  </svg>
)

export const MoonIcon: FC<SvgProps> = props => (
  <svg
    aria-hidden='true'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}>
    <path
      d='M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z'
      fill='currentColor'
    />
  </svg>
)
