import Image from 'next/image'
import React from 'react'

import HeaderNavLink from './HeaderNavLink'

const HeaderNav = ({ pathName }: { pathName: string }) => {
  const navLinks = [
    {
      className: 'w-[27px] md:w-[34px]',
      src: './nav_link_home',
      alt: 'nav link home',
      href: '/home',
      name: '홈',
    },
    {
      className: 'w-[36px] md:w-[46px]',
      src: './nav_link_trainer',
      alt: 'nav link trainer',
      href: '/trainer',
      name: '트레이너 찾기',
    },
    {
      className: 'w-[27px] md:w-[34px]',
      src: './nav_link_board',
      alt: 'nav link board',
      href: '/board',
      name: '게시판',
    },
    {
      className: 'w-[27px] md:w-[34px]',
      src: './nav_link_egg',
      alt: 'nav link egg',
      href: '/egg',
      name: '알키우기',
    },
    {
      className: 'w-[27px] md:w-[34px]',
      src: './nav_link_calendar',
      alt: 'nav link calendar',
      href: '/calendar',
      name: '캘린더',
    },
  ]

  return (
    <nav className='fixed bottom-0 left-0 flex w-full items-center justify-between gap-[2.34375vw] bg-white px-[1.406vw] py-[1.823vw] md:static md:mr-[4.323vw] md:w-fit md:items-end'>
      {navLinks.map((nav, index) => {
        return (
          <div
            key={nav.src + index}
            className={`relative ${nav.src.includes(pathName.split('/')[1]) && 'font-bold'}`}
          >
            <HeaderNavLink
              name={nav.name}
              content={
                <Image
                  src={`${nav.src}${nav.src.includes(pathName.split('/')[1]) ? '_active.svg' : '.svg'}`}
                  className={nav.className}
                  alt={nav.alt}
                  width={1}
                  height={1}
                />
              }
              href={nav.href}
            />
            {nav.src.includes(pathName.split('/')[1]) && (
              <div className='bg-main-1 absolute bottom-0 left-0 h-1 w-full' />
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default HeaderNav
