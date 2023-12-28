import { cn } from '@/utils/cn'
import React from 'react'

interface ButtonPros  {
    children : React.ReactNode,
    className? : string
}


export default function Button({ children, className } : ButtonPros) {
  return (
    <button className={cn('bg-primary-bright-red text-white font-medium px-6 py-4 rounded-full shadow-lg shadow-primary-bright-red/40', className)}>
        { children }
    </button>
  )
}
