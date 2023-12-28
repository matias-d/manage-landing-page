import Button from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (  
    <section className='h-screen pt-16 w-full overflow-hidden flex  px-36 items-center '>
        <section className='flex-1 space-y-10'>
            <h1 className='text-6xl font-bold text-primary-dark-blue'>Bring everyone <br/>
             together to build <br />
             better products.
            </h1>
            <p className='text-neutral-dark-grayish-blue lg:w-96'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <Button>Get Started</Button>
        </section>
        <section className='flex-1 w-full  flex justify-end'>
            <Image alt='simplify section' width='600' height='600' src='/images/illustration-intro.svg'/>
        </section>
    </section>
  )
}
