import Link from 'next/link'
import React from 'react'

const LoginButton = () => {
  return (
    <Link
      href='/login'
      className='bg-main-1 h-fit flex-none rounded-2xl px-[11px] py-[4px] text-sm leading-normal text-white md:rounded-3xl md:px-[22px] md:py-[11px]'
    >
      로그인
    </Link>
  )
}

export default LoginButton
