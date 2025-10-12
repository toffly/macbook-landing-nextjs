import React from 'react'
import Image from "next/image";
import {navLinks} from "@/constants";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Image src="/logo.svg" alt="Apple logo" width={24} height={24}/>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.label}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <Image src="/search.svg" alt="Search" width={24} height={24}/>
                    </button>
                    <button>
                        <Image src="/cart.svg" alt="Cart" width={24} height={24}/>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
