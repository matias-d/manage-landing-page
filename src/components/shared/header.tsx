import NavMobile from "./navs/nav-mobile";
import Nav from "./navs/nav";



export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full lg:pt-12 lg:pb-6 lg:px-36 px-6 lg:bg-neutral-very-light-gray/25 z-50 py-12 backdrop-blur-sm'>
      
      <nav className='w-full flex items-center justify-between'>
        <Nav />
        <NavMobile />
      </nav>
       
    </header>
  )
}
