'use client'

import { useRouter } from 'next/navigation'

const Main = () => {
  const router = useRouter()

  router.push('/home')

  return <></>
}

export default Main
