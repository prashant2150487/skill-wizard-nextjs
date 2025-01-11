import { ArrowUpRight } from 'lucide-react'
import { FC } from 'react'

export interface NavItem {
  label: string
  href: string
}


const Header: FC = () => {
  return (
    <header>
      <nav className="bg-white py-4 md:py-5 border-gray-200 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="#" className="flex items-center">
            <span className="self-center text-4xl font-semibold whitespace-nowrap text-black dark:text-white">
              Skillwizard
            </span>
          </a>
          <div className="flex items-center gap-x-4 md:gap-x-28">
            <a href="/about" className="text-black text-xl">
              About
            </a>
            <a href="/prog  " className="text-black text-xl">
              Programs
            </a>
            <button className="bg-[#2E31A6] px-5 py-3 rounded-3xl flex gap-1 shadow-sm">
              <span>Register Now! </span>
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header