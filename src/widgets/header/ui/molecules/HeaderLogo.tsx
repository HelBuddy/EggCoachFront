import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderLogo = () => {
  return (
    <button>
      <Link href='/home'>
        <Image
          className='logo-w'
          src='/logo.svg'
          width={1}
          height={1}
          alt='header logo'
        />
      </Link>
    </button>
  )
}

export default HeaderLogo
