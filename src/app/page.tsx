'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Main = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  })

  return <></>
}

export default Main
