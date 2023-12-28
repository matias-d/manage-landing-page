import NavMobile from "./nav-mobile";
import Logo from "./logo";
import Nav from "./nav";



export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full lg:pt-12 lg:pb-6 lg:px-36 px-6 lg:bg-neutral-very-light-gray z-50 py-12 '>
      
      <nav className='w-full flex items-center justify-between'>
        <Nav />
        <NavMobile />
      </nav>
       
    </header>
  )
}
