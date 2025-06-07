import Image from 'next/image'
import React from 'react'

const HeaderUser = () => {
  return (
    <Image
      className='ml-[20px] h-[40px] w-[40px] md:h-[67px] md:w-[67px]'
      src='./user_default.svg'
      alt='user profile default'
      width={1}
      height={1}
    />
  )
}

export default HeaderUser
