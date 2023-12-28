import Link from "next/link"

interface NavMenuProps {
    isOpen : boolean
}

export default function NavMenu({ isOpen } : NavMenuProps) {
  return (
    <div className={`fixed inset-x-0 w-full h-screen bg-gradient-to-b from-black/60 inset-y-24 via-black/30 to-black/10 z-10 ${isOpen ? 'left-1/2 -translate-x-1/2' : '-left-full'} transition-all duration-200 ease-in-out lg:hidden `}>
            <aside className={`absolute shadow-lg py-6 rounded bg-neutral-very-light-gray  left-1/2 -translate-x-1/2 w-72 ${isOpen ? 'top-16' : '-top-full'} transition-all duration-200 ease-in`}>
              <ul className='flex flex-col items-center gap-y-8 text-primary-dark-blue text-sm font-bold'>
                  <li><Link href='#' className="hover:text-neutral-dark-grayish-blue transition-colors">Pricing</Link></li>
                  <li><Link href='#' className="hover:text-neutral-dark-grayish-blue transition-colors">Product</Link></li>
                  <li><Link href='#' className="hover:text-neutral-dark-grayish-blue transition-colors">About Us</Link></li>
                  <li><Link href='#' className="hover:text-neutral-dark-grayish-blue transition-colors">Careers</Link></li>
                  <li><Link href='#' className="hover:text-neutral-dark-grayish-blue transition-colors">Community</Link></li>
              </ul>
            </aside>
    </div>
  )
}
