import TrainerList from '@/entities/trainer/ui/molecules/TrainerList'
import KaKaoMap from '@/shared/ui/atoms/KaKaoMap'
import React from 'react'

const Trainer = () => {
  return (
    <div className='md:flex'>
      <KaKaoMap />
      <TrainerList />
    </div>
  )
}

export default Trainer
