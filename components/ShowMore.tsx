'use client'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import CustomeButton from './CustomeButton'
import { updateSearchParams } from '@/utils'

const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
  const router = useRouter()

  const handleNavigation = ()=>{
    const newLimit = (pageNumber +1) * 10
    const newPathname = updateSearchParams("limit",`${newLimit}`)
    router.push(newPathname)
  }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomeButton btnType='button' title='Show More' containerStyles='bg-blue-500 rounded-full text-white' handleClick={handleNavigation} />
      )}
    </div>
  )
}

export default ShowMore