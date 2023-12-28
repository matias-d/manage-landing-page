import Button from "../ui/button";
import Link from "next/link";
import Logo from "./logo";

//Icons
import IconPinterest from "../icons/icon-pinterest";
import IconInstagram from "../icons/icon-instagram";
import IconFacebook from "../icons/icon-facebook";
import IconYoutube from "../icons/icon-youtube";
import IconTwitter from "../icons/icon-twitter";

export default function Footer() {
  return (
    <footer>
        <section className="w-full bg-primary-bright-red flex items-center lg:px-36 lg:justify-between justify-center lg:h-48 relative overflow-hidden flex-col lg:flex-row gap-y-6 h-56">
            <h3 className="text-neutral-very-light-gray lg:text-3xl text-2xl font-medium text-center lg:text-start">
                Simplify how your team <br/>
                works today.
            </h3>
            <Button className="bg-neutral-very-light-gray text-primary-bright-red py-3 text-sm">Get Started</Button>
            <div className="bg-pattern-tablet bg-no-repeat h-full w-full absolute top-0 right-0"></div>
        </section>
        <section className="bg-neutral-very-dark-blue text-neutral-very-light-gray lg:px-36 flex  lg:flex-row items-center justify-between h-auto lg:h-52 py-12 gap-x-32 gap-y-8 flex-col-reverse px-6 relative">
            <section className="flex flex-col-reverse gap-y-12 lg:flex-col justify-between h-full items-center ">
                <Logo color="#f5f5f5"/>
                <section className="flex items-center lg:gap-x-4 w-full gap-x-8">
                    <Link href='#'><IconFacebook /></Link>
                    <Link href='#'><IconYoutube /></Link>
                    <Link href='#'><IconTwitter /></Link>
                    <Link href='#'><IconPinterest /></Link>
                    <Link href='#'><IconInstagram /></Link>
                </section>
            </section>
            <nav className=" flex items-start justify-between w-full text-neutral-dark-grayish-blue px-8 lg:px-0 text-sm lg:text-base">
                <ul className="space-y-2">
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>Pircing</Link></li>
                    <li><Link href='#'>Products</Link></li>
                    <li><Link href='#'>About Us</Link></li>
                </ul>
                <ul className="space-y-2">
                    <li><Link href='#'>Careers</Link></li>
                    <li><Link href='#'>Community</Link></li>
                    <li><Link href='#'>Privacy Policy</Link></li>
                </ul>
            </nav>
            <section className="h-full flex flex-col justify-between items-end ">
                <fieldset className="flex items-center gap-x-4">
                    <input              className="bg-neutral-very-light-gray px-4 py-2 rounded-full"
                    placeholder="Updates in your inbox..."
                    type='text'
                    />
                    <Button className="text-sm py-3">Go</Button>
                </fieldset>
                <p className="text-neutral-dark-grayish-blue text-xs absolute left-1/2 -translate-x-1/2 bottom-4 text-center lg:-right-0 lg:-translate-x-0 lg:bottom-10 w-full lg:w-auto">Copyright 2023. All Right Reserved</p>
            </section>
        </section>
    </footer>
  )
}
