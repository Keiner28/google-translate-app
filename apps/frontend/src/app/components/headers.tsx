import React from 'react'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { Switcher } from './switcher'

export const Header = (): JSX.Element => {
  return (
    <Navbar maxWidth='2xl'>
      <NavbarBrand>
        <span className='text-2xl'>
          <AiFillThunderbolt />
        </span>
        <p className='font-bold text-inherit'>Keiner Dev</p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <Switcher />
      </NavbarContent>
    </Navbar>
  )
}
