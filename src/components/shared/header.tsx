import Button from '../ui/button'
import Link from 'next/link'
import Logo from './logo'


export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full py-12 px-36'>
        <nav className='w-full flex items-center justify-between '>
            <Logo />
            <ul className='flex items-center gap-x-8 text-primary-dark-blue text-sm font-medium'>
                <li><Link href='#'>Pricing</Link></li>
                <li><Link href='#'>Product</Link></li>
                <li><Link href='#'>About Us</Link></li>
                <li><Link href='#'>Careers</Link></li>
                <li><Link href='#'>Community</Link></li>
            </ul>
            <Button>Get Started</Button>
        </nav>
    </header>
  )
}
