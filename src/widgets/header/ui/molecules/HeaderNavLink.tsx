import Link from 'next/link'
import React, { ReactElement } from 'react'

interface IPropsHeaderNavLink {
  content: ReactElement
  href: string
  name: string
}

const HeaderNavLink = ({ content, href, name }: IPropsHeaderNavLink) => {
  return (
    <Link className='flex flex-col items-center' href={href}>
      {content}
      <div className={`mt-[15px] mb-[10px] hidden text-[14px] md:block`}>
        {name}
      </div>
    </Link>
  )
}

export default HeaderNavLink
