"use client"
import IconHamburger from "../icons/icon-hamburger";
import IconClose from "../icons/icon-close";
import NavMenu from "./nav-menu";
import Logo from "./logo";

import { useState } from "react";

export default function NavMobile() {

  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <section className="w-full lg:hidden items-center justify-between flex">
          <Logo />
          <button className="block lg:hidden z-[80]" onClick={onOpen}>
            {
              isOpen ? <IconClose /> : <IconHamburger />
            }
              
          </button>
      </section>
      <NavMenu isOpen={isOpen}/>
    </>
  )
}
