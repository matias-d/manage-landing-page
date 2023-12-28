import { cn } from '@/utils/cn'
import React from 'react'

interface ButtonPros  {
    children : React.ReactNode,
    className? : string,
    type?: 'button' | 'submit' | 'reset'
}


export default function Button({ children, className, type = 'button' } : ButtonPros) {
  return (
    <button 
    type={type}
    className={cn('bg-primary-bright-red text-white font-medium px-6 py-4 rounded-full shadow-lg shadow-primary-bright-red/40 hover:bg-primary-bright-red/80 transition-all', className)}>
        { children }
    </button>
  )
}
