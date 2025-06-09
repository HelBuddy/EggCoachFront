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
    <header className='fixed top-0 left-0 flex w-full max-w-[1440px] items-center justify-between bg-white px-[16px] py-[19px] md:left-[50%] md:translate-x-[-50%] md:px-[90px] md:py-[33px]'>
      <HeaderLogo />
      <div className='flex items-center'>
        <HeaderNav pathName={pathName} />
        <LoginButton />
        <HeaderUser />
      </div>
    </header>
  )
}

export default HeaderContainer
