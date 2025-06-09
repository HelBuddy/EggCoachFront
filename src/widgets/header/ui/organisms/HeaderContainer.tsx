'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import LoginButton from '../molecules/HeaderLoginButton'
import HeaderLogo from '../molecules/HeaderLogo'
import HeaderNav from '../molecules/HeaderNav'
import HeaderUser from '../molecules/HeaderUser'

const HeaderContainer = () => {
  const pathName = usePathname()
  const noHeaderLinks = ['/login']

  return noHeaderLinks.includes(pathName) ? (
    <></>
  ) : (
    <header className='w-full bg-white px-[20px] py-[15px] md:py-0'>
      <div className='mx-auto flex w-full max-w-[1440px] items-center justify-between'>
        <HeaderLogo />
        <div className='flex items-center'>
          <HeaderNav pathName={pathName} />
          <LoginButton />
          <HeaderUser />
        </div>
      </div>
    </header>
  )
}

export default HeaderContainer
