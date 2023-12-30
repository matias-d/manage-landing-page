import Button from "../../ui/button";
import Link from "next/link";
import Logo from "../logo";

export default function Nav() {
  return (
    <section className='w-full lg:flex items-center justify-between hidden'>
            <Logo className="animate-fade-right"/>
            <ul className='flex items-center gap-x-8 text-primary-dark-blue text-sm font-medium animate-fade-down'>
                  <li><Link href='#' className="hover:text-neutral-dark-grayish-blue transition-colors">Pricing</Link></li>
                  <li><Link href='#diferencies' className="hover:text-neutral-dark-grayish-blue transition-colors">Product</Link></li>
                  <li><Link href='#' className="hover:text-neutral-dark-grayish-blue transition-colors">About Us</Link></li>
                  <li><Link href='#' className="hover:text-neutral-dark-grayish-blue transition-colors">Careers</Link></li>
                  <li><Link href='#reviews' className="hover:text-neutral-dark-grayish-blue transition-colors">Community</Link></li>
            </ul>
            <Button className="animate-fade-left">Get Started</Button>
    </section>
  )
}
