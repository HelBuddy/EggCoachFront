import TestSvg from '@public/file.svg'

const Home = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-white'>
      <div>
        <h1 className='bg-main-2'>메인 컬러 테스트</h1>
        <TestSvg />
      </div>
    </div>
  )
}

export default Home
