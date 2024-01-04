import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import Button from './Button'

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-36 sticky top-0">
        <div className="container mx-auto px-24 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex flex-row items-center gap-3.5">
              <Logo />
              <h1>
                <span>J</span>O<span>J</span>OS
              </h1>
            </div>
            <div className="flex flex-row items-center gap-16">
              <button
                type="button"
                className="inline-flex items-center md:hidden"
                onClick={toggle}
              >
                {/* Menu icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                  />
                </svg>
              </button>
              <ul className="hidden md:flex gap-16">
                <li>
                  <Link href="/about">
                    <p>Jogos</p>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <p>Sobre</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contacts">
                    <p>Blog</p>
                  </Link>
                </li>
              </ul>
              <div className="hidden md:block">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
