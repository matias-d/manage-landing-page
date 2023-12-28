import Button from "../ui/button";
import Link from "next/link";
import Logo from "./logo";

export default function Nav() {
  return (
    <section className='w-full lg:flex items-center justify-between hidden'>
            <Logo />
            <ul className='flex items-center gap-x-8 text-primary-dark-blue text-sm font-medium'>
                <li><Link href='#'>Pricing</Link></li>
                <li><Link href='#'>Product</Link></li>
                <li><Link href='#'>About Us</Link></li>
                <li><Link href='#'>Careers</Link></li>
                <li><Link href='#'>Community</Link></li>
            </ul>
            <Button>Get Started</Button>
    </section>
  )
}
