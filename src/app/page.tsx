import TestSvg from '@public/file.svg'

const Home = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-white'>
      <div>
        <span>TEST PAGE</span>

        {/* svg 사용 example */}
        <TestSvg />
      </div>
    </div>
  )
}

export default Home
