"use client"

import Button from '@/components/ui/button'
import {useState } from 'react'

interface FormState {
    type : 'ERROR' | 'SUCCESS' | 'INIT',
    message : string
}

export default function FooterForm() {
 

 const [form, setForm] = useState<FormState>({
    type : 'INIT',
    message : ''
 })
 const [value, setValue] = useState('')

 const resetForm = () => setForm({
    type : 'INIT',
    message : ''
 })

 const handleSubmit = (e : React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!value) {
        setForm({
            type : 'ERROR',
            message : 'Please insert a email'
        })
        return
    }

    if (!emailRegex.test(value)) {
        setForm({
            type : 'ERROR',
            message : 'Please insert a email valid'
        })
        return
    }

    setForm({
        type : 'SUCCESS',
        message : 'Send updates to your inbox!'
    })

    setTimeout(() => {
        resetForm()
    }, 3000)
  
 }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-x-4 ">

        <div className='relative'>
            <input 
                onFocus={resetForm}
                className={`bg-neutral-very-light-gray px-4 py-2 rounded-full text-primary-dark-blue ${form.type === 'ERROR' ? 'border border-red-400' : form.type === 'SUCCESS' ? 'border border-green-400' : 'border-none'} outline-none text-sm`}
                placeholder="Updates in your inbox..."
                type='text'
                name='email'
                onChange={(e) => setValue(e.target.value)}
            />

            {
                form.message &&
                <p className={`absolute left-4 top-12 text-xs font-medium ${form.type === 'ERROR' ? 'text-red-400' : 'text-green-400'}`}>{form.message}</p>
            }
        </div>

        <Button type='submit' className="text-sm py-3">Go</Button>
    </form>
  )
}
