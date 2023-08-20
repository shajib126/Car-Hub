import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomeButton from './CustomeButton'

const Navabr = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 bg-transparent'>
            <Link href='/'>
                <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain'/>
            </Link>
            <CustomeButton title="Sign in" btnType='button' containerStyles='text-blue rounded-full bg-white min-w-[130ox]' />
        </nav>
    </header>
  )
}

export default Navabr