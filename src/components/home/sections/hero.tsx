import Button from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (  
    <section className='h-auto lg:h-screen pt-28 lg:pt-16 w-full lg:overflow-hidden flex px-6 lg:px-36 items-center flex-col lg:flex-row'>
        <section className='flex-1 flex flex-col gap-y-6 lg:gap-y-10 order-1 lg:order-none items-center lg:items-start animate-fade-right'>
            <h1 className='text-4xl lg:text-6xl font-bold text-primary-dark-blue text-center lg:text-start'>Bring everyone <br/>
             together to build <br />
             better products.
            </h1>
            <p className='text-neutral-dark-grayish-blue lg:w-96 text-center lg:text-start w-72'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <Button>Get Started</Button>
        </section>
        <section className='flex-1 w-full  flex justify-end animate-fade-left'>
            <Image alt='simplify section' width='600' height='600' src='/images/illustration-intro.svg'/>
        </section>
    </section>
  )
}
