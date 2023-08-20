'use client'
import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomeButton = ({title,containerStyles,handleClick}:CustomButtonProps) => {
  return (
    <button type={'button'} disabled={false} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomeButton